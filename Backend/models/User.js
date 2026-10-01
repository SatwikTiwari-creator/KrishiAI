const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, default: 'India' },
  role: { type: String, enum: ['farmer', 'agronomist', 'admin'], default: 'farmer' }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);