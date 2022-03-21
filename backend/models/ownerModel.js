const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
  teamName: String,
  ownerFirstName: String,
  ownerLastName: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Owner', ownerSchema);