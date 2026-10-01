const router = require('express').Router();
const MarketPrice = require('../models/Marketprice');

// Get market prices
router.get('/', async (req, res) => {
  try {
    const prices = await MarketPrice.find().sort({ date: -1 }).limit(20);
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add market price
router.post('/', async (req, res) => {
  try {
    const price = await MarketPrice.create(req.body);
    res.status(201).json(price);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;