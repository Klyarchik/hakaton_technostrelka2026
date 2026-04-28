const express = require("express");
const router = express.Router();
const { getLeaderboard } = require("../controllers/leaderboard.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

router.get(
  "/",
  authMiddleware,
  /* #swagger.tags = ['Leaderboard'] #swagger.summary = 'Получение таблицы лидеров' */
  getLeaderboard
);

module.exports = router;