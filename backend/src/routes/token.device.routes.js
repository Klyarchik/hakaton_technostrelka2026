const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");
const {
  registerDeviceToken,
  removeDeviceToken
} = require('../controllers/token.device.controller');


router.post(
  "/device",
  authMiddleware,
  /* #swagger.tags = ['Tokens'] #swagger.summary = 'Регистрация токена устройства' */
  registerDeviceToken,
);


router.delete(
  "/device",
  authMiddleware,
  /* #swagger.tags = ['Tokens'] #swagger.summary = 'Удаление токенов устройства' */
  removeDeviceToken,
);

module.exports = router;
