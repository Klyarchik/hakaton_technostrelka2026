const prisma = require("../client");
const { awardQuestPoints } = require("../utils/awards.quests");

// создание чекпоинта
const createCheckpoint = async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      quest_id,
      title,
      task_description,
      code_word,
      latitude,
      longitude,
      hint,
      point_rules,
    } = req.body;

    if (!quest_id)
      return res.status(400).json({ error: "quest_id обязателен" });
    const questIdInt = parseInt(quest_id);
    if (isNaN(questIdInt))
      return res.status(400).json({ error: "quest_id должен быть числом" });

    if (!title)
      return res.status(400).json({ error: "Название чекпоинта обязательно" });
    if (!task_description || task_description.length < 20)
      return res
        .status(400)
        .json({ error: "Задание должно содержать минимум 20 символов" });
    if (!code_word)
      return res.status(400).json({ error: "Кодовое слово обязательно" });
    if (!latitude || !longitude)
      return res
        .status(400)
        .json({ error: "Координаты (latitude, longitude) обязательны" });

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    if (isNaN(lat) || isNaN(lng))
      return res.status(400).json({ error: "Координаты должны быть числами" });

    const quest = await prisma.quests.findUnique({ where: { id: questIdInt } });
    if (!quest) return res.status(404).json({ error: "Квест не найден" });
    if (quest.creator_id !== userId)
      return res
        .status(403)
        .json({ error: "Только создатель квеста может добавлять чекпоинты" });

    const lastCheckpoint = await prisma.quest_checkpoints.findFirst({
      where: { quest_id: questIdInt },
      orderBy: { order_index: "desc" },
      select: { order_index: true },
    });
    const newOrderIndex = lastCheckpoint ? lastCheckpoint.order_index + 1 : 0;

    const newCheckpoint = await prisma.quest_checkpoints.create({
      data: {
        order_index: newOrderIndex,
        title,
        task_description,
        code_word,
        latitude: lat,
        longitude: lng,
        hint: hint || null,
        point_rules: point_rules || null,
        quests: { connect: { id: questIdInt } },
      },
    });

    res.status(201).json({
      message: "Чекпоинт успешно создан",
      checkpoint: newCheckpoint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Отправка ответа на задание текущего чекпоинта (только код-слово)
const submitAnswer = async (req, res) => {
  const { answer } = req.body;
  const userId = req.user.userId;

  if (!answer || typeof answer !== "string") {
    return res
      .status(400)
      .json({ error: "Необходимо передать answer (строку)" });
  }

  try {
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
          include: { quest_checkpoints: { orderBy: { order_index: "asc" } } },
        },
        teams: true,
      },
    });

    if (!session) {
      return res.status(404).json({ error: "Активная сессия не найдена" });
    }

    const quest = session.quests;
    const currentOrder = session.current_checkpoint_order;
    const checkpoints = quest.quest_checkpoints;
    const currentCp = checkpoints.find((cp) => cp.order_index === currentOrder);
    if (!currentCp) {
      return res.status(404).json({ error: "Текущий чекпоинт не найден" });
    }

    // Проверяем, есть ли код-слово в чекпоинте
    if (!currentCp.code_word) {
      return res
        .status(400)
        .json({ error: "На этом чекпоинте нет кодового слова" });
    }

    const isCorrect =
      answer.trim().toLowerCase() === currentCp.code_word.trim().toLowerCase();
    if (!isCorrect) {
      return res.status(400).json({ error: "Неверно. Попробуйте снова." });
    }

    // Обновляем статус чекпоинта на completed (без записи в session_answers)
    await prisma.session_checkpoints.updateMany({
      where: { session_id: session.id, checkpoint_id: currentCp.id },
      data: { status: "completed", completed_at: new Date() },
    });

    const isLast = currentOrder === checkpoints.length - 1;

    if (isLast) {
      // Завершаем сессию
      await prisma.sessions.update({
        where: { id: session.id },
        data: { status: "completed", finished_at: new Date() },
      });

      // Начисляем очки команде (если командная сессия)
      if (session.team_id && session.teams) {
        await awardQuestPoints(
          session.team_id,
          quest,
          session.transport_mode,
          session.id,
        );
      }

      return res.status(200).json({
        message: "Поздравляем! Вы успешно завершили квест!",
        completed: true,
      });
    }

    // Переход к следующему чекпоинту
    const nextOrder = currentOrder + 1;
    const nextCp = checkpoints.find((cp) => cp.order_index === nextOrder);
    if (nextCp) {
      await prisma.sessions.update({
        where: { id: session.id },
        data: { current_checkpoint_order: nextOrder },
      });
      await prisma.session_checkpoints.updateMany({
        where: { session_id: session.id, checkpoint_id: nextCp.id },
        data: { status: "active" },
      });
    }

    return res.status(200).json({
      message: "Ответ верный! Переход к следующему чекпоинту.",
      completed: false,
      next_checkpoint_order: nextOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createCheckpoint,
  submitAnswer,
};
