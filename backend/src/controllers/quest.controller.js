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
      return res.status(400).json({ error: "У вас недостаточно прав для данного запроса" });
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

module.exports = {
  createQuest,
  getAllDraftCurrentUser,
  getAllQuestsCurrentUser,
  getAllModerateQuests,
};
