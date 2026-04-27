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
        error: `Вы уже состоите в команде "${existingMembership.teams.name}" (ID: ${existingMembership.team_id}). Сначала покиньте её.`,
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

module.exports = {
  createTeam,
  joinTeamByCode,
};
