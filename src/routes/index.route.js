const express = require('express');
const { getUserData } = require('../controller/index.controller');
const router = express.Router();

router.get('/', getUserData);

module.exports = router;