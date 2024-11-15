const bcrypt = require('bcrypt');
const User = require('../models/user');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(203).json(`Sorry, ${username} already exists`);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`);
  }
};

// Login user
exports.login = (req, res) => {
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  });
};

// Get logged-in user's information
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select(['_id', 'username', 'email']);
    res.json(user);
  } catch (error) {
    res.status(400).json(`Error: ${error.message}`);
  }
};

// Logout user
exports.logout = (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json('Logging out');
  } else {
    res.json('No user to log out');
  }
};
