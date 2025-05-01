const express = require('express');
const router = express.Router();

const { createUser } = require('../Controllers/UserControllers');

router.post('/', createUser);

module.exports = router;