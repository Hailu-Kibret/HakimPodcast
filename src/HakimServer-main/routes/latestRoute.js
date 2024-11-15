// routes/content.js
const express = require('express');
const {
  getContents,
  getContentById,
  createContent,
  updateContent,
  deleteContent
} = require('../controller/latestController');
const latestRouter = express();
// @route   GET /api/contents
// @desc    Get all content
// @access  Public
latestRouter.get('/', getContents);

// @route   GET /api/contents/:id
// @desc    Get a specific content by ID
// @access  Public
latestRouter.get('/:id', getContentById);

// @route   POST /api/contents
// @desc    Create a new content
// @access  Public
latestRouter.post('/', createContent);

// @route   PUT /api/contents/:id
// @desc    Update a content by ID
// @access  Public
latestRouter.put('/:id', updateContent);

// @route   DELETE /api/contents/:id
// @desc    Delete a content by ID
// @access  Public
latestRouter.delete('/:id', deleteContent);

module.exports = latestRouter;
