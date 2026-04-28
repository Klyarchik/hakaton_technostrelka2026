const express = require("express");
const router = express.Router();
const {
  createTeam,
  joinTeamByCode,
  getTeamCurrentUser,
  leaveTeam,
  removeMemberFromTeam
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


router.get(
  "/team-current-user",
  authMiddleware,
  /* #swagger.tags = ['Teams'] #swagger.summary = 'Получение команды текущего пользователя' */
  getTeamCurrentUser
);


router.delete(
  "/leave",
  authMiddleware,
  /* #swagger.tags = ['Teams'] #swagger.summary = 'Выход из команды' */
  leaveTeam
);


router.delete(
  "/member/remove",
  authMiddleware,
  /* #swagger.tags = ['Teams'] #swagger.summary = 'Удаление из команды' */
  removeMemberFromTeam
);

module.exports = router;