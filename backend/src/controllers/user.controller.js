const prisma = require("../client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { minioClient, BUCKET_NAME } = require('../configs/minio');

// Регистрация пользователя
const register = async (req, res) => {
  try {
    const { nickname, password, email, age_group } = req.body;

    if (!nickname) {
      return res.status(400).json({ error: "nickname обязателен" });
    }
    if (!password) {
      return res.status(400).json({ error: "Пароль обязателен" });
    }
    if (!email) {
      return res.status(400).json({ error: "Email обязателен" });
    }
    if (!age_group) {
      return res.status(400).json({ error: "age_group обязателен" });
    }
    if (!['14-15', '16-17'].includes(age_group)) {
      return res.status(400).json({ error: "age_group должен быть '14-15' или '16-17'" });
    }

    const existingUser = await prisma.users.findUnique({ where: { nickname } });
    if (existingUser) {
      return res.status(400).json({ error: "Пользователь с таким nickname уже существует" });
    }

    if (password.length < 6 || password.length > 25) {
      return res.status(400).json({ error: "Пароль должен быть не менее 6 символов и не более 25 символов" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        nickname,
        password: hashPassword,
        email,
        age_group,
        role: 'user',
        avatar: `http://localhost:9000/${BUCKET_NAME}/default-avatar.jpg`
      }
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "secret");
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Авторизация пользователя
const entrance = async (req, res) => {
  try {
    const { nickname, password } = req.body;

    if (!nickname || !password) {
      return res.status(400).json({ error: "nickname и password обязательны" });
    }

    const user = await prisma.users.findUnique({ where: { nickname } });

    if (!user) {
      return res.status(400).json({ error: "Неверный nickname или password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Неверный nickname или password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "secret");
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Изменение данных текущего пользователя (nickname и avatar)
const updateCurrentUserData = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { nickname } = req.body;

    const user = await prisma.users.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    let newNickname = user.nickname;
    if (nickname) {
      const existingUser = await prisma.users.findUnique({ where: { nickname } });
      if (existingUser && existingUser.id !== userId) {
        return res.status(400).json({ error: "Пользователь с таким nickname уже существует" });
      }
      newNickname = nickname;
    }

    let avatarUrl = user.avatar;
    if (req.file) {
      const fileName = `user-${userId}-${Date.now()}.jpg`;
      await minioClient.putObject(
        BUCKET_NAME,
        fileName,
        req.file.buffer,
        req.file.size,
        { 'Content-Type': req.file.mimetype }
      );
      avatarUrl = `http://localhost:9000/${BUCKET_NAME}/${fileName}`;
    }

    await prisma.users.update({
      where: { id: userId },
      data: {
        nickname: newNickname,
        avatar: avatarUrl
      }
    });

    res.status(200).json({ message: "Данные пользователя обновлены" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Изменение пароля пользователя
const changePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: "старый и новый пароли обязательны" });
    }

    const user = await prisma.users.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      return res.status(400).json({ error: "Неверный старый пароль" });
    }

    if (newPassword.length < 6 || newPassword.length > 25) {
      return res.status(400).json({ error: "Новый пароль должен быть не менее 6 символов и не более 25 символов" });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.users.update({
      where: { id: userId },
      data: { password: newHashedPassword }
    });

    res.status(200).json({ message: "Пароль успешно изменен" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Получение всех данных текущего пользователя
const getCurrentUserData = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nickname: true,
        email: true,
        age_group: true,
        role: true,
        avatar: true,
        created_at: true,
        updated_at: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Получение всех пользователей (только публичные данные)
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        nickname: true,
        avatar: true,
        age_group: true,
        role: true
      }
    });

    if (users.length === 0) {
      return res.status(404).json({ error: "Пользователи не найдены" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Получение пользователя по id
const getUserById = async (req, res) => {
  try {
    const id = Number(req.query.id);
    if (!id) {
      return res.status(400).json({ error: "id пользователя обязателен" });
    }

    const user = await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        nickname: true,
        avatar: true,
        age_group: true,
        role: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Пользователь с таким id не существует" });
    }

    res.status(200).json({ userById: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  register,
  entrance,
  getCurrentUserData,
  updateCurrentUserData,
  changePassword,
  getAllUsers,
  getUserById
};