const prisma = require("../client");


// создание сессии прохождения
const createSession = async (req, res) => {
  const { questId, mode, transportMode } = req.body;
  const userId = req.user.userId;

  try {
    // проверяем, существует ли квест и опубликован ли он
    const quest = await prisma.quests.findFirst({
      where: {
        id: questId,
        status: "published",
      },
    });
    if (!quest) {
      return res
        .status(404)
        .json({ error: "Квест не найден или не опубликован" });
    }

    // 2. Режим соло
    if (mode === "solo") {
      // Проверить, не начат ли уже квест этим пользователем (активная сессия)
      const activeSession = await prisma.sessions.findFirst({
        where: {
          user_id: userId,
          status: { in: ["started", "in_progress"] },
        },
      });
      if (activeSession) {
        return res
          .status(400)
          .json({
            error: "У вас уже есть активная сессия. Завершите её или бросьте.",
          });
      }

      // Проверка, не проходил ли пользователь этот квест ранее
      const completedSession = await prisma.sessions.findFirst({
        where: {
          user_id: userId,
          quest_id: questId,
          status: 'completed'
        }
      });
      if (completedSession) {
        return res.status(400).json({
          error: 'Вы уже проходили этот квест. Повторное прохождение невозможно.'
        });
      }

      // создатель квеста не может проходить его соло
      if (quest.creator_id === userId) {
        return res
          .status(400)
          .json({ error: "Создатель квеста не может проходить его соло" });
      }

      // Создаём соло-сессию
      const session = await prisma.sessions.create({
        data: {
          quest_id: questId,
          user_id: userId,
          status: "started",
          transport_mode: transportMode || null,
          started_at: new Date(),
          current_checkpoint_order: 0,
        },
        include: {
          quest: true,
          user: { select: { id: true, nickname: true, avatar: true } },
        },
      });
      return res.status(201).json(session);
    }

    // режим команды
    if (mode === "team") {
      // проверка, состоит ли пользователь в какой-либо команде
      const membership = await prisma.team_members.findFirst({
        where: { user_id: userId },
        include: { teams: true },
      });
      if (!membership) {
        return res.status(400).json({ error: "Вы не состоите в команде" });
      }
      const teamId = membership.team_id;

      // проверка, что в команде от 2 до 6 человек
      const membersCount = await prisma.team_members.count({
        where: { team_id: teamId },
      });
      if (membersCount < 2 || membersCount > 6) {
        return res
          .status(400)
          .json({ error: "Команда должна содержать от 2 до 6 участников" });
      }

      // если в команде есть создатель квеста – нельзя начинать
      const teamMembers = await prisma.team_members.findMany({
        where: { team_id: teamId },
        include: { users: true },
      });
      const hasCreator = teamMembers.some(
        (member) => member.users.id === quest.creator_id,
      );
      if (hasCreator) {
        return res
          .status(400)
          .json({
            error:
              "Невозможно начать квест, так как его создатель входит в команду",
          });
      }

      // проверить, нет ли уже активной сессии у этой команды по данному квесту
      const activeSession = await prisma.sessions.findFirst({
        where: {
          team_id: teamId,
          quest_id: questId,
          status: { in: ["started", "in_progress"] },
        },
      });
      if (activeSession) {
        return res.status(400).json({ error: "Команда уже начала этот квест" });
      }

      // проверка, не проходила ли команда этот квест ранее (завершённая сессия)
      const completedSession = await prisma.sessions.findFirst({
        where: {
          team_id: teamId,
          quest_id: questId,
          status: "completed",
        },
      });
      if (completedSession) {
        return res
          .status(400)
          .json({
            error:
              "Ваша команда уже проходила этот квест ранее. Повторное прохождение невозможно.",
          });
      }

      // создаём командную сессию
      const session = await prisma.sessions.create({
        data: {
          quest_id: questId,
          team_id: teamId,
          status: "started",
          transport_mode: transportMode || null,
          started_at: new Date(),
          current_checkpoint_order: 0,
        },
        include: {
          quest: true,
          team: {
            include: {
              team_members: {
                include: {
                  users: { select: { id: true, nickname: true, avatar: true } },
                },
              },
            },
          },
        },
      });
      return res.status(201).json(session);
    }

    // если mode не распознан
    return res
      .status(400)
      .json({ error: 'Параметр mode должен быть "solo" или "team"' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const 


module.exports = {
  createSession,
};
