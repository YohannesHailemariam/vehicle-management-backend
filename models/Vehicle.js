const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], required: true },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
