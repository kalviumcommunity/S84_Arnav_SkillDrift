const User = require('../Models/User');

const createUser = async (req, res) => {
  try {
    const { name, email, password, age, profession, bio , isVerified} = req.body;

    // Validate required fields
    if (!name || !email || !password || !age) {
      return res.status(400).json({ error: 'All fields are required are required.' });
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

module.exports = { createUser };
