const express = require("express");
const router = express.Router();
const {
  createSession
} = require('../controllers/session.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

router.post(
  "/new",
  authMiddleware,
  /* #swagger.tags = ['Sessions'] #swagger.summary = 'Создание сессии прохождения' */
  createSession
);

module.exports = router;