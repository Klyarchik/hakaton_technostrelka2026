const prisma = require("../client");

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

module.exports = {
  createCheckpoint,
};
