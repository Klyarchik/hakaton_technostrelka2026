const prisma = require("../client");

// создание сессии прохождения
const createSession = async (req, res) => {
  const { questIdStr, mode, transportMode } = req.body;
  const userId = req.user.userId;
  const questId = parseInt(questIdStr);

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

    const ALLOWED_TRANSPORT_MODES = [
      "walk",
      "public_transport",
      "car",
      "offroad",
      "no_roads",
    ];

    if (transportMode !== undefined && transportMode !== null) {
      if (!ALLOWED_TRANSPORT_MODES.includes(transportMode)) {
        return res.status(400).json({
          error: `Недопустимый способ передвижения. Разрешённые значения: ${ALLOWED_TRANSPORT_MODES.join(", ")}`,
        });
      }
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
        return res.status(400).json({
          error: "У вас уже есть активная сессия. Завершите её или бросьте.",
        });
      }

      // Проверка, не проходил ли пользователь этот квест ранее
      const completedSession = await prisma.sessions.findFirst({
        where: {
          user_id: userId,
          quest_id: questId,
          status: "completed",
        },
      });
      if (completedSession) {
        return res.status(400).json({
          error:
            "Вы уже проходили этот квест. Повторное прохождение невозможно.",
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
          quests: true,
          users: { select: { id: true, nickname: true, avatar: true } },
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
        return res.status(400).json({
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
        return res.status(400).json({
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
          quests: true,
          teams: {
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
      return res
        .status(201)
        .json({ message: "Вы успешно записались на квест", session: session });
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

// получить текущую активную сессию пользователя
const getCurrentSession = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Находим активную сессию (без session_checkpoints)
    const session = await prisma.sessions.findFirst({
      where: {
        OR: [
          { user_id: userId },
          { teams: { team_members: { some: { user_id: userId } } } }
        ],
        status: { in: ['started', 'in_progress'] }
      },
      include: {
        quests: {
          select: {
            id: true,
            title: true,
            difficulty: true,
            duration_minutes: true,
            description: true,
            location_text: true,
            image: true,
            rules: true
          }
        },
        users: {
          select: { id: true, nickname: true, avatar: true }
        },
        teams: {
          include: {
            team_members: {
              include: {
                users: { select: { id: true, nickname: true, avatar: true } }
              }
            }
          }
        }
      }
    });

    if (!session) {
      return res.status(200).json({ message: 'Нет активной сессии' });
    }

    // Получаем все чекпоинты квеста из quest_checkpoints
    const questCheckpoints = await prisma.quest_checkpoints.findMany({
      where: { quest_id: session.quest_id },
      orderBy: { order_index: 'asc' }
    });

    const currentOrder = session.current_checkpoint_order;

    // Формируем массив чекпоинтов со статусами
    const checkpoints = questCheckpoints.map(cp => {
      let status;
      if (cp.order_index < currentOrder) {
        status = 'completed';       // пройденный
      } else if (cp.order_index === currentOrder) {
        status = 'active';          // текущий
      } else {
        status = 'locked';          // заблокированный
      }
      return {
        id: cp.id,
        order_index: cp.order_index,
        title: cp.title,
        description: cp.task_description,
        code_word: cp.code_word,
        hint: cp.hint,
        point_rules: cp.point_rules,
        latitude: cp.latitude,
        longitude: cp.longitude,
        status: status
      };
    });

    const totalCheckpoints = questCheckpoints.length;

    res.status(200).json({
      id: session.id,
      quest_id: session.quest_id,
      status: session.status,
      transport_mode: session.transport_mode,
      started_at: session.started_at,
      finished_at: session.finished_at,
      current_checkpoint_order: session.current_checkpoint_order,
      quest: session.quests,
      user: session.users,
      team: session.teams,
      checkpoints: checkpoints,
      total_checkpoints: totalCheckpoints
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// 2. Получить данные текущего чекпоинта активной сессии
const getCurrentCheckpoint = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Находим активную сессию
    const session = await prisma.sessions.findFirst({
      where: {
        OR: [
          { user_id: userId },
          { teams: { team_members: { some: { user_id: userId } } } },
        ],
        status: { in: ["started", "in_progress"] },
      },
      include: {
        quests: {
          include: {
            quest_checkpoints: {
              orderBy: { order_index: "asc" },
            },
          },
        },
      },
    });

    if (!session) {
      return res.status(404).json({ error: "Активная сессия не найдена" });
    }

    const currentOrder = session.current_checkpoint_order;
    const currentCp = session.quests.quest_checkpoints.find(
      (cp) => cp.order_index === currentOrder,
    );

    if (!currentCp) {
      // Если чекпоинт не найден (например, квест без точек), завершаем сессию?
      return res.status(404).json({ error: "Текущий чекпоинт не найден" });
    }

    // Получаем задания для этого чекпоинта (таблица checkpoint_tasks)
    const tasks = await prisma.checkpoint_tasks.findMany({
      where: { checkpoint_id: currentCp.id },
      include: {
        task_choice_options: true, // варианты ответов для choice_question
      },
    });

    // Формируем ответ с заданиями
    const checkpointData = {
      id: currentCp.id,
      order_index: currentCp.order_index,
      title: currentCp.title,
      description: currentCp.task_description, // описание задания
      code_word: currentCp.code_word,
      hint: currentCp.hint,
      point_rules: currentCp.point_rules,
      latitude: currentCp.latitude,
      longitude: currentCp.longitude,
      tasks: tasks.map((task) => ({
        id: task.id,
        type: task.task_type, // 'code_word' или 'choice_question'
        question: task.question_text,
        options:
          task.options?.map((opt) => ({ id: opt.id, text: opt.option_text })) ||
          [],
      })),
    };

    res.status(200).json(checkpointData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 3. Прервать сессию (бросить квест)
const abandonSession = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Находим активную сессию
    const session = await prisma.sessions.findFirst({
      where: {
        OR: [
          { user_id: userId },
          { teams: { team_members: { some: { user_id: userId } } } },
        ],
        status: { in: ["started", "in_progress"] },
      },
    });

    if (!session) {
      return res.status(404).json({ error: "Активная сессия не найдена" });
    }

    // Обновляем статус на abandoned
    await prisma.sessions.update({
      where: { id: session.id },
      data: { status: "abandoned" },
    });

    res.status(200).json({ message: "Сессия прервана" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = {
  createSession,
  getCurrentSession,
  getCurrentCheckpoint,
  abandonSession,
};
