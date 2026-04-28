const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const tokenDeviceRoutes = require('./token.device.routes');
const teamRoutes = require('./team.routes');
const questRoutes = require('./quest.routes');
const checkpointRoutes = require('./checkpoint.routes');
const sessionRoutes = require('./session.routes');
const leaderboardRoutes = require('./leaderboard.routes');

router.use('/user', userRoutes);
router.use('/token', tokenDeviceRoutes);
router.use('/team', teamRoutes);
router.use('/quest', questRoutes);
router.use('/checkpoint', checkpointRoutes);
router.use('/session', sessionRoutes);
router.use('/leaderboard', leaderboardRoutes);

module.exports = router;