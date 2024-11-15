// models/Content.js
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
