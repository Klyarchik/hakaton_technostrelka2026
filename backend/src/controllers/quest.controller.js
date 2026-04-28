const prisma = require("../client");
const { minioClient, BUCKET_NAME } = require("../configs/minio");

// создание квеста
const createQuest = async (req, res) => {
  try {
    const creator_id = req.user.userId;
    const {
      title,
      description,
      location_text,
      difficulty,
      duration_minutes,
      rules,
      is_hidden,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Обложка квеста обязательна" });
    }
    if (!title || title.length < 5) {
      return res.status(400).json({
        error:
          "Название квеста обязательно и должно содержать минимум 5 символов",
      });
    }
    if (!description || description.length < 30) {
      return res.status(400).json({
        error:
          "Описание квеста обязательно и должно содержать минимум 30 символов",
      });
    }
    if (!location_text) {
      return res.status(400).json({ error: "Район/город обязателен" });
    }
    if (!difficulty || difficulty < 1 || difficulty > 5) {
      return res
        .status(400)
        .json({ error: "Уровень сложности должен быть числом от 1 до 5" });
    }
    if (!duration_minutes || duration_minutes <= 0) {
      return res.status(400).json({
        error:
          "Длительность квеста (в минутах) должна быть положительным числом",
      });
    }

    const isHiddenBoolean = is_hidden === "true" || is_hidden === true;
    let status = isHiddenBoolean ? "draft" : "moderation";

    let imageUrl;

    const fileName = `quest-${Date.now()}-${creator_id}.jpg`;
    await minioClient.putObject(
      BUCKET_NAME,
      fileName,
      req.file.buffer,
      req.file.size,
      { "Content-Type": req.file.mimetype },
    );
    imageUrl = `http://localhost:9000/${BUCKET_NAME}/${fileName}`;

    const newQuest = await prisma.quests.create({
      data: {
        creator_id,
        title,
        description,
        location_text,
        image: imageUrl,
        difficulty: parseInt(difficulty),
        duration_minutes: parseInt(duration_minutes),
        rules: rules || null,
        status,
        is_hidden: isHiddenBoolean,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    res.status(201).json({
      message: "Квест успешно создан",
      quest: newQuest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// получение всех черновиков пользователя
const getAllDraftCurrentUser = async (req, res) => {
  try {
    const userId = req.user.userId;

    const allDraft = await prisma.quests.findMany({
      where: {
        creator_id: userId,
        status: "draft",
      },
      include: {
        quest_checkpoints: {
          orderBy: {
            order_index: "asc",
          },
        },
      },
    });

    if (!allDraft || allDraft.length === 0) {
      return res.status(200).json({
        message: "У пользователя нет черновиков",
        drafts: [],
      });
    }

    res.status(200).json({
      message: "Черновики успешно получены",
      drafts: allDraft,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// получение всех квестов пользователя кроме черновиков
const getAllQuestsCurrentUser = async (req, res) => {
  try {
    const userId = req.user.userId;

    const allQuests = await prisma.quests.findMany({
      where: {
        creator_id: userId,
        status: { not: "draft" },
      },
      include: {
        quest_checkpoints: {
          orderBy: {
            order_index: "asc",
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    if (!allQuests || allQuests.length === 0) {
      return res.status(200).json({
        message: "У пользователя нет квестов (кроме черновиков)",
        quests: [],
      });
    }

    res.status(200).json({
      message: "Квесты успешно получены",
      quests: allQuests,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// получение всех квестов на модерации
const getAllModerateQuests = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (user.role !== "moderator") {
      return res
        .status(400)
        .json({ error: "У вас недостаточно прав для данного запроса" });
    }

    const allModerateQuests = await prisma.quests.findMany({
      where: {
        status: "moderation",
      },
      include: {
        quest_checkpoints: {
          orderBy: {
            order_index: "asc",
          },
        },
      },
    });

    if (!allModerateQuests || allModerateQuests.length === 0) {
      return res.status(200).json({
        message: "Квестов на модерации нет",
        moderateQuests: [],
      });
    }

    res.status(200).json({
      message: "Квесты на модерации успешно получены",
      moderateQuests: allModerateQuests,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// получение квеста по id
const getQuestById = async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) {
      return res.status(400).json({ error: "id квеста обязателен" });
    }

    const questById = await prisma.quests.findUnique({
      where: { id: parseInt(id) },
      include: {
        quest_checkpoints: {
          orderBy: {
            order_index: "asc",
          },
        },
      },
    });

    if (!questById) {
      return res.status(200).json({
        message: "Квеста с таким id не существует",
      });
    }

    res.status(200).json({ questById: questById });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// модерация квеста
const moderateQuest = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { id, status, rejection_reason } = req.body;

    // Проверка прав модератора
    const user = await prisma.users.findUnique({ where: { id: userId } });
    if (!user || user.role !== "moderator") {
      return res
        .status(403)
        .json({ error: "У вас недостаточно прав для данного запроса" });
    }

    if (!id) {
      return res.status(400).json({ error: "id квеста обязателен" });
    }
    const questId = parseInt(id);
    if (isNaN(questId)) {
      return res.status(400).json({ error: "Некорректный id" });
    }

    if (!status || !["published", "rejected"].includes(status)) {
      return res
        .status(400)
        .json({ error: "Новый статус должен быть 'published' или 'rejected'" });
    }

    // Если статус rejected — причина обязательна
    if (
      status === "rejected" &&
      (!rejection_reason || rejection_reason.trim() === "")
    ) {
      return res.status(400).json({ error: "Причина отклонения обязательна" });
    }

    // Проверяем существование квеста и что он в статусе "moderation"
    const quest = await prisma.quests.findUnique({ where: { id: questId } });
    if (!quest) {
      return res.status(404).json({ error: "Квест не найден" });
    }
    if (quest.status !== "moderation") {
      return res
        .status(400)
        .json({ error: "Можно менять статус только у квестов на модерации" });
    }

    // Обновляем
    const updatedQuest = await prisma.quests.update({
      where: { id: questId },
      data: {
        status: status,
        rejection_reason: status === "rejected" ? rejection_reason : null,
        updated_at: new Date(),
      },
    });

    res.status(200).json({
      message: `Квест ${status === "published" ? "опубликован" : "отклонён"}`,
      quest: updatedQuest,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// получение квестов по уровню сложности
const getQuestsByDifficulty = async (req, res) => {
  let page = parseInt(req.query.page, 10);
  if (isNaN(page) || page < 1) page = 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const difficultyOption = req.query.difficultyOption;

  try {
    const whereBase = {
      status: { in: ["published", "archived"] },
      is_hidden: false
    };

    if (!difficultyOption) {
      const [quests, total] = await Promise.all([
        prisma.quests.findMany({
          where: whereBase,
          skip: skip,
          take: limit,
        }),
        prisma.quests.count({ where: whereBase }),
      ]);

      return res.status(200).json({
        data: quests,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      });
    }

    let difficultyFilter;
    switch (difficultyOption) {
      case "1":
        difficultyFilter = { gte: 1, lte: 2 };
        break;
      case "2":
        difficultyFilter = { equals: 3 };
        break;
      case "3":
        difficultyFilter = { gte: 4, lte: 5 };
        break;
      default:
        return res.status(400).json({ error: "Параметр должен быть 1, 2 или 3" });
    }

    const where = { ...whereBase, difficulty: difficultyFilter };
    const [quests, total] = await Promise.all([
      prisma.quests.findMany({
        where,
        skip: skip,
        take: limit,
      }),
      prisma.quests.count({ where }),
    ]);

    if (total === 0) {
      return res.status(200).json({
        data: [],
        total: 0,
        page,
        totalPages: 0,
        message: "Квесты с таким уровнем сложности не найдены",
      });
    }

    res.status(200).json({
      data: quests,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// создатель квеста или модератор изменять видимость квеста (is_hidden)
const updateQuestStatus = async (req, res) => {
  const { questId, action } = req.body; // action: 'archive' или 'hide'
  const userId = req.user.userId;

  if (!questId || !action) {
    return res.status(400).json({ error: 'Необходимо указать questId и action (archive/hide)' });
  }

  if (action !== 'archive' && action !== 'hide') {
    return res.status(400).json({ error: 'action должен быть "archive" или "hide"' });
  }

  try {
    // 1. Находим квест
    const quest = await prisma.quests.findUnique({
      where: { id: parseInt(questId) }
    });
    if (!quest) {
      return res.status(404).json({ error: 'Квест не найден' });
    }

    // 2. Проверяем права: создатель или модератор
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: { role: true }
    });
    const isModerator = user.role === 'moderator';
    const isCreator = quest.creator_id === userId;

    if (!isCreator && !isModerator) {
      return res.status(403).json({ error: 'У вас недостаточно прав. Только создатель квеста или модератор может изменять статус.' });
    }

    // 3. Определяем новые значения status и is_hidden
    let newStatus, newIsHidden;
    if (action === 'archive') {
      newStatus = 'archived';
      newIsHidden = false;
    } else if (action === 'hide') {
      newStatus = 'draft';
      newIsHidden = true;
    }

    // 4. Обновляем квест
    const updatedQuest = await prisma.quests.update({
      where: { id: parseInt(questId) },
      data: {
        status: newStatus,
        is_hidden: newIsHidden,
        updated_at: new Date()
      }
    });

    res.status(200).json({
      message: action === 'archive' ? 'Квест архивирован' : 'Квест скрыт',
      quest: updatedQuest
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createQuest,
  getAllDraftCurrentUser,
  getAllQuestsCurrentUser,
  getAllModerateQuests,
  getQuestById,
  moderateQuest,
  getQuestsByDifficulty,
  updateQuestStatus
};
