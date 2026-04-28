const prisma = require("../client");
const { generateString } = require("../utils/random.string");

// создание команды
const createTeam = async (req, res) => {
  const { name, description } = req.body;
  const ownerId = req.user.userId;

  try {
    // Проверка: не состоит ли уже в команде
    const existingMember = await prisma.team_members.findFirst({
      where: { user_id: ownerId },
    });
    if (existingMember) {
      return res
        .status(400)
        .json({ error: "Вы уже состоите в другой команде" });
    }

    // Генерация уникального кода
    let inviteCode;
    let isUnique = false;
    while (!isUnique) {
      inviteCode = generateString(8).trim();
      const existing = await prisma.teams.findUnique({
        where: { invite_code: inviteCode },
      });
      if (!existing) isUnique = true;
    }

    const team = await prisma.teams.create({
      data: {
        name,
        description,
        creator_id: ownerId,
        invite_code: inviteCode,
        team_members: {
          create: { user_id: ownerId },
        },
      },
      include: {
        team_members: {
          include: {
            users: {
              select: {
                id: true,
                email: true,
                nickname: true,
                age_group: true,
                role: true,
                avatar: true,
                created_at: true,
                updated_at: true,
              },
            },
          },
        },
      },
    });
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// добавления участника в команду
const joinTeamByCode = async (req, res) => {
  const { inviteCode } = req.body;
  const userId = req.user.userId;

  try {
    // Найти команду по коду
    console.log("Код из запроса:", JSON.stringify(inviteCode));
    const team = await prisma.teams.findFirst({
      where: { invite_code: inviteCode },
    });
    console.log("Найденная команда:", team);

    if (!team) {
      return res.status(404).json({ error: "Неверный код команды" });
    }

    // Проверить не полная ли команда
    const membersCount = await prisma.team_members.count({
      where: { team_id: team.id },
    });
    if (membersCount >= 6) {
      return res
        .status(400)
        .json({ error: "Команда уже заполнена (6 человек)" });
    }

    // Проверить, не состоит ли уже пользователь в какой-либо команде
    const existingMembership = await prisma.team_members.findFirst({
      where: { user_id: userId },
      include: { teams: { select: { id: true, name: true } } },
    });
    if (existingMembership) {
      return res.status(400).json({
        error: `Вы уже состоите в команде "${existingMembership.teams.name}"`,
      });
    }

    // Добавить участника
    const membership = await prisma.team_members.create({
      data: {
        team_id: team.id,
        user_id: userId,
      },
      include: { teams: true, users: true },
    });
    res.status(200).json({ message: "Вы успешно вступили в команду", membership: membership});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// получение команды пользователя
const getTeamCurrentUser = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    const membership = await prisma.team_members.findFirst({
      where: { user_id: userId },
      include: {
        teams: {
          include: {
            team_members: {
              include: {
                users: {
                  select: {
                    id: true,
                    nickname: true,
                    avatar: true,
                    age_group: true,
                    role: true,
                    email: true,
                    created_at: true,
                    updated_at: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!membership || !membership.teams) {
      return res.status(200).json({ message: 'У пользователя нет команды' });
    }

    const team = membership.teams;

    const response = {
      id: team.id,
      name: team.name,
      description: team.description,
      creator_id: team.creator_id,
      invite_code: team.invite_code,
      created_at: team.created_at,
      members: team.team_members.map((member) => ({
        id: member.users.id,
        nickname: member.users.nickname,
        avatar: member.users.avatar,
        age_group: member.users.age_group,
        role: member.users.role,
        email: member.users.email,
        joined_at: member.joined_at,
      })),
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// выход из команды
const leaveTeam = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Найти текущее членство пользователя
    const membership = await prisma.team_members.findFirst({
      where: { user_id: userId },
      include: { teams: true }
    });

    if (!membership) {
      return res.status(400).json({ error: 'Вы не состоите в команде' });
    }

    const teamId = membership.team_id;
    const team = membership.teams;
    const isCreator = (team.creator_id === userId);

    // Если пользователь — создатель команды
    if (isCreator) {
      // Проверить, есть ли в команде другие участники
      const membersCount = await prisma.team_members.count({
        where: { team_id: teamId }
      });

      if (membersCount > 1) {
        return res.status(400).json({
          error: 'Вы не можете покинуть команду, так как в ней есть другие участники.'
        });
      } else {
        // Создатель один — удаляем всю команду (каскадно удалятся team_members)
        await prisma.teams.delete({ where: { id: teamId } });
        return res.status(200).json({ message: 'Команда удалена, так как вы были единственным участником' });
      }
    } else {
      // Обычный участник — просто выходит
      await prisma.team_members.delete({ where: { id: membership.id } });
      return res.status(200).json({ message: 'Вы покинули команду' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// удаление участника из команды (только для капитана)
const removeMemberFromTeam = async (req, res) => {
  const captainId = req.user.userId;
  const { memberId } = req.body; // id удаляемого пользователя

  if (!memberId) {
    return res.status(400).json({ error: 'Не указан ID участника' });
  }

  try {
    // Найти команду, в которой капитан является создателем
    const team = await prisma.teams.findFirst({
      where: { creator_id: captainId }
    });

    if (!team) {
      return res.status(404).json({ error: 'У вас недостаточно прав для данного запроса' });
    }

    // Проверить, что удаляемый не капитан
    if (team.creator_id === parseInt(memberId)) {
      return res.status(400).json({ error: 'Нельзя удалить самого себя.' });
    }

    // Найти запись членства удаляемого пользователя в этой команде
    const membership = await prisma.team_members.findFirst({
      where: {
        team_id: team.id,
        user_id: parseInt(memberId)
      }
    });

    if (!membership) {
      return res.status(404).json({ error: 'Такого участника нет в вашей команде' });
    }

    // Удалить участника
    await prisma.team_members.delete({ where: { id: membership.id } });

    res.status(200).json({ message: 'Участник удалён из команды' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createTeam,
  joinTeamByCode,
  getTeamCurrentUser,
  leaveTeam,
  removeMemberFromTeam
};
