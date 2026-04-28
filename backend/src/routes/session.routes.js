const express = require("express");
const router = express.Router();
const {
  createSession,
  getCurrentSession,
  getCurrentCheckpoint,
  abandonSession,
} = require("../controllers/session.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");


router.post(
  "/new",
  authMiddleware,
  /* #swagger.tags = ['Sessions'] #swagger.summary = 'Создание сессии прохождения' */
  createSession,
);


router.get(
  "/current",
  authMiddleware,
  /* #swagger.tags = ['Sessions'] #swagger.summary = 'Получить текущую сессию прохождения' */
  getCurrentSession,
);


router.get(
  "/current/checkpoint",
  authMiddleware,
  /* #swagger.tags = ['Sessions'] #swagger.summary = 'Получить текущий чекпоинт текущей сессии прохождения' */
  getCurrentCheckpoint,
);



router.delete(
  "/current/abandon",
  authMiddleware,
  /* #swagger.tags = ['Sessions'] #swagger.summary = 'Завершить досрочно текущую сессию' */
  abandonSession,
);

module.exports = router;