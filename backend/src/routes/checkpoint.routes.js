const express = require("express");
const router = express.Router();
const {
  createCheckpoint,
  submitAnswer
} = require('../controllers/checkpoint.controller');
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post(
  "/new",
  authMiddleware,
  /* #swagger.tags = ['Checkpoints'] #swagger.summary = 'Создания нового чекпоинта' */
  createCheckpoint
);


router.post(
  "/check",
  authMiddleware,
  /* #swagger.tags = ['Checkpoints'] #swagger.summary = 'Проверка кодового слова и переход на след чекпоинт' */
  submitAnswer
);


module.exports = router;