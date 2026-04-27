const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const questRoutes = require('./quest.routes');

router.use('/user', userRoutes);
router.use('/quest', questRoutes);

module.exports = router;