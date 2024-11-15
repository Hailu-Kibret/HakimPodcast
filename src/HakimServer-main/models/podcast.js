// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoSrc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  episode: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
