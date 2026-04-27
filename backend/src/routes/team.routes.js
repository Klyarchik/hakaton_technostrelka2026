const express = require("express");
const router = express.Router();
const {
  createTeam,
  joinTeamByCode
} = require('../controllers/team.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');



router.post(
  "/moderate",
  authMiddleware,
  /* #swagger.tags = ['Teams'] #swagger.summary = 'Создание команды' */
  createTeam
);


router.post(
  "/join",
  authMiddleware,
  /* #swagger.tags = ['Teams'] #swagger.summary = 'Вступление в команду' */
  joinTeamByCode
);

module.exports = router;