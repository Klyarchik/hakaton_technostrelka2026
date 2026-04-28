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

module.exports = {
  createTeam,
  joinTeamByCode,
  getTeamCurrentUser
};
