const express = require("express");
const router = express.Router();
const {
  createQuest,
  getAllDraftCurrentUser,
  getAllQuestsCurrentUser
} = require('../controllers/quest.controller');
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { authMiddleware } = require("../middlewares/auth.middleware");

router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  /* #swagger.tags = ['Quests'] */
  /* #swagger.summary = 'Создание нового квеста' */
  /* #swagger.consumes = ['multipart/form-data'] */
  /* #swagger.parameters['title'] = {
    in: 'formData',
    type: 'string',
    required: true,
    description: 'Название квеста (минимум 5 символов)'
  } */
  /* #swagger.parameters['description'] = {
    in: 'formData',
    type: 'string',
    required: true,
    description: 'Описание квеста (минимум 30 символов)'
  } */
  /* #swagger.parameters['location_text'] = {
    in: 'formData',
    type: 'string',
    required: true,
    description: 'Район/город проведения квеста'
  } */
  /* #swagger.parameters['difficulty'] = {
    in: 'formData',
    type: 'integer',
    required: true,
    description: 'Уровень сложности (от 1 до 5)'
  } */
  /* #swagger.parameters['duration_minutes'] = {
    in: 'formData',
    type: 'integer',
    required: true,
    description: 'Примерная длительность квеста в минутах'
  } */
  /* #swagger.parameters['rules'] = {
    in: 'formData',
    type: 'string',
    required: false,
    description: 'Правила / важные предупреждения (опционально)'
  } */
  /* #swagger.parameters['is_hidden'] = {
    in: 'formData',
    type: 'boolean',
    required: true,
    description: 'Если true – квест сохранится как черновик, иначе отправится на модерацию (по умолчанию false)'
  } */
  /* #swagger.parameters['image'] = {
    in: 'formData',
    type: 'file',
    required: true,
    description: 'Обложка квеста (≤5 МБ)'
  } */
  /* #swagger.responses[201] = {
    description: 'Квест успешно создан',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Квест успешно создан' },
        quest: { type: 'object', properties: { id: { type: 'integer' }, title: { type: 'string' }, status: { type: 'string' } } }
      }
    }
  } */
  /* #swagger.responses[400] = {
    description: 'Ошибка валидации (неверные или отсутствующие данные)',
    schema: { type: 'object', properties: { error: { type: 'string', example: 'Название квеста обязательно и должно содержать минимум 5 символов' } } }
  } */
  /* #swagger.responses[401] = {
    description: 'Unauthorized',
    schema: { type: 'object', properties: { error: { type: 'string', example: 'Токен не предоставлен' } } }
  } */
  /* #swagger.responses[500] = {
    description: 'Internal Server Error',
    schema: { type: 'object', properties: { error: { type: 'string', example: 'Internal server error' } } }
  } */
  createQuest
);


router.get(
  "/get-all-draft-current-user",
  authMiddleware,
  /* #swagger.tags = ['Checkpoints'] #swagger.summary = 'Получение всех черновиков текущего пользователя' */
  getAllDraftCurrentUser
);


router.get(
  "/get-all-quests-current-user",
  authMiddleware,
  /* #swagger.tags = ['Checkpoints'] #swagger.summary = 'Получение всех квестов текущего пользователя кроме черновиков' */
  getAllQuestsCurrentUser
);

module.exports = router;