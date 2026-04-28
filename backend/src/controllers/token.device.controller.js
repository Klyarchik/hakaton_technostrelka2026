const { error } = require("node:console");
const prisma = require("../client");

// регистрация токена устройства
const registerDeviceToken = async (req, res) => {
  try {
    const userId = req.user.userId;
    const token_device = req.body.token_device;

    if (!userId) {
      return res.status(400).json({ error: "id пользователя обязателен" });
    }

    if (!token_device) {
      return res.status(400).json({ error: "Токен устройства обязателен" });
    }

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    const tokens = user.token_device || [];

    if (!tokens.includes(token_device)) {
      tokens.push(token_device);

      await prisma.users.update({
        where: { id: userId },
        data: { token_device: tokens },
      });
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(
      `Произошла ошибка при регистрации токена устройства: ${error.message}`,
    );
    res.status(500).json({ error: "Internal server error" });
  }
};

// удаление токенов устройства (при выходе из аккаунта)
const removeDeviceToken = async (req, res) => {
  try {
    const userId = req.user.userId;

    const existingUser = await prisma.users.findUnique({
      where: { id: userId }
    });
    if (!existingUser) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { token_device: [] }
    });

    if (updatedUser.token_device && updatedUser.token_device.length > 0) {
      return res.status(500).json({ error: "Не удалось удалить токены устройства" });
    }

    res.status(200).json({ message: "Токены устройства успешно удалены" });
  } catch (error) {
    console.error(`Ошибка при удалении токенов: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  registerDeviceToken,
  removeDeviceToken,
};
