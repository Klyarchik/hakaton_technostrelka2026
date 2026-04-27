const express = require("express");
const router = express.Router();
const {
  createCheckpoint,
  getAllDraftCurrentUser,
} = require('../controllers/checkpoint.controller');
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post(
  "/new",
  authMiddleware,
  /* #swagger.tags = ['Checkpoints'] #swagger.summary = 'Создания нового чекпоинта' */
  createCheckpoint
);


module.exports = router;