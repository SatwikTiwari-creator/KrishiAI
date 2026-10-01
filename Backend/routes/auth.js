const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, phone, password, location } = req.body;
    const existing = await User.findOne({ phone });
    if (existing) return res.status(400).json({ error: 'User already exists with this phone number' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, phone, password: hashedPassword, location });
    
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user._id, name: user.name, phone: user.phone } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ error: 'Invalid phone or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid phone or password' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, phone: user.phone } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;