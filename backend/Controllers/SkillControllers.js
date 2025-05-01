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

module.exports = { createSkill };
