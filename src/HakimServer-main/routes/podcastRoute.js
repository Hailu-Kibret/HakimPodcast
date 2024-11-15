// routes/video.js
const express = require('express');
const {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo
} = require('../controller/podcastController');
const podcastRouter= express();
// @route   GET /api/videos
// @desc    Get all videos
// @access  Public
podcastRouter.get('/', getVideos);

// @route   GET /api/videos/:id
// @desc    Get a specific video by ID
// @access  Public
podcastRouter.get('/:id', getVideoById);

// @route   POST /api/videos
// @desc    Create a new video
// @access  Public
podcastRouter.post('/', createVideo);

// @route   PUT /api/videos/:id
// @desc    Update a video by ID
// @access  Public
podcastRouter.put('/:id', updateVideo);

// @route   DELETE /api/videos/:id
// @desc    Delete a video by ID
// @access  Public
podcastRouter.delete('/:id', deleteVideo);

module.exports = podcastRouter;
