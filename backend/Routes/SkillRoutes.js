const express = require('express');
const router = express.Router();

const { createSkill , getAllSkills , getSkillById , updateSkill} = require('../Controllers/SkillControllers');

router.post('/', createSkill);
router.get('/', getAllSkills);
router.get('/:id', getSkillById);
router.put('/:id', updateSkill);

module.exports = router;