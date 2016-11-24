const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
router.use('/words', require('./words'));
router.use('/players', require('./players'));

module.exports = router;
