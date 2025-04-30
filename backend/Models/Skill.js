const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  description: {
    type: String,
    default: '',
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  difficultyLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Difficulty level is required']
  },
  tags: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('Skill', SkillSchema);
