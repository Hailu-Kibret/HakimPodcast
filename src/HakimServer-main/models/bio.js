// models/Bio.js
const mongoose = require('mongoose');

const bioSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String,
  details: String,
});

const Bio = mongoose.model('Bio', bioSchema);

module.exports = Bio;
