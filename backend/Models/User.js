const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  age: {
    type: Number,
    min: [12, 'Age must be at least 12'],
    required: false
  },
  profession: {
    type: String,
    trim: true,
    default: ''
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  bio: {
    type: String,
    default: '',
    maxlength: [1000, 'Bio cannot exceed 1000 characters']
  },
  accountCreatedAt: {
    type: Date,
    default: () => Date.now()
  }
});

module.exports = mongoose.model('User', UserSchema);