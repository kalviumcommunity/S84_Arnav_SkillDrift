const User = require('../Models/User');

//create user
const createUser = async (req, res) => {
  try {
    const { name, email, password, age, profession, bio , isVerified} = req.body;

    // Validate required fields
    if (!name || !email || !password || !age) {
      return res.status(400).json({ error: 'All fields are required .' });
    }

    const user = await User.create({
      name,
      email,
      password,
      age,
      profession,
      isVerified,
      bio
    });

    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate email error
      return res.status(400).json({ error: 'Email already exists.' });
    }

    res.status(400).json({ error: err.message });
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get userbyID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update user by ID
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true, // return the updated document
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser };

