const mongoose = require('mongoose');

const MarketPriceSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  mandiLocation: { type: String, required: true },
  pricePerQuintal: { type: Number, required: true },
  trend: { type: String, enum: ['up', 'down', 'stable'], default: 'stable' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MarketPrice', MarketPriceSchema);