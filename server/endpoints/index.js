const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
router.use('/words', require('./words'));

module.exports = router;
