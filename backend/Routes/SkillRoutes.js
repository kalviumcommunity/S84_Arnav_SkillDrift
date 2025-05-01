const express = require('express');
const router = express.Router();

const { createSkill } = require('../Controllers/SkillControllers');

router.post('/', createSkill);

module.exports = router;