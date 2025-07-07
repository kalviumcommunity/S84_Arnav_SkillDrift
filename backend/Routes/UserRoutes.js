const express = require('express');
const router = express.Router();

const {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser
} = require('../Controllers/UserControllers');

// Auth
router.post('/signup', createUser);  // ⬅️ changed from '/' to '/signup'
router.post('/login', loginUser);

// User management
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);

module.exports = router;
