const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to handle user login (check credentials)
router.post('/LoginPage', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation: Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Please enter both username and password.' });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Compare entered password with stored hashed password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Return success message if credentials are correct
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
