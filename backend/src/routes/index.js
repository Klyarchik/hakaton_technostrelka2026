const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const teamRoutes = require('./team.routes');
const questRoutes = require('./quest.routes');
const checkpointRoutes = require('./checkpoint.routes');

router.use('/user', userRoutes);
router.use('/team', teamRoutes);
router.use('/quest', questRoutes);
router.use('/checkpoint', checkpointRoutes);

module.exports = router;