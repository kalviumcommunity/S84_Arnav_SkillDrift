const express = require('express');
const router = express.Router();

const { createSkill , getAllSkills , getSkillById } = require('../Controllers/SkillControllers');

router.post('/', createSkill);
router.get('/', getAllSkills);
router.get('/:id', getSkillById);

module.exports = router;