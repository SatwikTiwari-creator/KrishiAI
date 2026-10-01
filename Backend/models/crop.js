const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cropName: { type: String, required: true },
  soilType: { type: String },
  healthStatus: { type: String, default: 'Healthy' },
  diseaseDetected: { type: String, default: 'None' },
  recommendation: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Crop', CropSchema);