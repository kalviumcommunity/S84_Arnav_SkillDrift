const Skill = require('../Models/Skill');

const createSkill = async (req, res) => {
  try {
    const { name, category, description, difficultyLevel, tags } = req.body;

    // Basic validation
    if (!name || !category || !difficultyLevel) {   //both description and tags are optional
      return res.status(400).json({
        error: 'Name, Category, and Difficulty Level are required.'
      });
    }

    const skill = await Skill.create({
      name,
      category,
      description,
      difficultyLevel,
      tags
    });

    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get skill by ID
const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSkill , getAllSkills ,getSkillById };
