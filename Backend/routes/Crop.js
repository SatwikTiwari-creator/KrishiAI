const router = require('express').Router();
const Crop = require('../models/crop');

// Get all crops for user
router.get('/:userId', async (req, res) => {
  try {
    const crops = await Crop.find({ userId: req.params.userId });
    res.json(crops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add crop record
router.post('/', async (req, res) => {
  try {
    const newCrop = await Crop.create(req.body);
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;