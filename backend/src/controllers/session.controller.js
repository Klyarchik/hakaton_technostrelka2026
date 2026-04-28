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








// session.controller.js (дополнение)

// 1. Получить текущую активную сессию пользователя
const getCurrentSession = async (req, res) => {
  const userId = req.user.userId;

  try {
    const session = await prisma.sessions.findFirst({
      where: {
        OR: [
          { user_id: userId },          // соло-сессия
          { team: { team_members: { some: { user_id: userId } } } } // командная сессия
        ],
        status: { in: ['started', 'in_progress'] }
      },
      include: {
        quest: {
          select: {
            id: true,
            title: true,
            difficulty: true,
            duration_minutes: true,
            description: true,
            // можно добавить другие поля, нужные фронту
          }
        },
        user: {   // для соло-сессии
          select: { id: true, nickname: true, avatar: true }
        },
        team: {   // для командной сессии
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

    // Дополнительно: общее количество чекпоинтов квеста
    const checkpointsCount = await prisma.quest_checkpoints.count({
      where: { quest_id: session.quest_id }
    });

    res.status(200).json({
      ...session,
      total_checkpoints: checkpointsCount
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
          { team: { team_members: { some: { user_id: userId } } } }
        ],
        status: { in: ['started', 'in_progress'] }
      },
      include: {
        quest: {
          include: {
            quest_checkpoints: {
              orderBy: { order_index: 'asc' }
            }
          }
        }
      }
    });

    if (!session) {
      return res.status(404).json({ error: 'Активная сессия не найдена' });
    }

    const currentOrder = session.current_checkpoint_order;
    const currentCp = session.quest.quest_checkpoints.find(cp => cp.order_index === currentOrder);

    if (!currentCp) {
      // Если чекпоинт не найден (например, квест без точек), завершаем сессию?
      return res.status(404).json({ error: 'Текущий чекпоинт не найден' });
    }

    // Получаем задания для этого чекпоинта (таблица checkpoint_tasks)
    const tasks = await prisma.checkpoint_tasks.findMany({
      where: { checkpoint_id: currentCp.id },
      include: {
        options: true   // варианты ответов для choice_question
      }
    });

    // Формируем ответ с заданиями
    const checkpointData = {
      id: currentCp.id,
      order_index: currentCp.order_index,
      title: currentCp.title,
      description: currentCp.task_description, // описание задания
      hint: currentCp.hint,
      point_rules: currentCp.point_rules,
      latitude: currentCp.latitude,
      longitude: currentCp.longitude,
      tasks: tasks.map(task => ({
        id: task.id,
        type: task.task_type,     // 'code_word' или 'choice_question'
        question: task.question_text,
        options: task.options?.map(opt => ({ id: opt.id, text: opt.option_text })) || []
      }))
    };

    res.status(200).json(checkpointData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
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
          { team: { team_members: { some: { user_id: userId } } } }
        ],
        status: { in: ['started', 'in_progress'] }
      }
    });

    if (!session) {
      return res.status(404).json({ error: 'Активная сессия не найдена' });
    }

    // Обновляем статус на abandoned
    await prisma.sessions.update({
      where: { id: session.id },
      data: { status: 'abandoned' }
    });

    res.status(200).json({ message: 'Сессия прервана' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createSession,
};
