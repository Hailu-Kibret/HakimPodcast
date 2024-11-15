// routes/scholarship.js
const express = require('express');
const {
  getScholarships,
  getScholarshipById,
  createScholarship,
  updateScholarship,
  deleteScholarship
} = require('../controller/scholarshipController');
const scholarRouter= express();
// @route   GET /api/scholarships
// @desc    Get all scholarships
// @access  Public
scholarRouter.get('/', getScholarships);

// @route   GET /api/scholarships/:id
// @desc    Get a specific scholarship by ID
// @access  Public
scholarRouter.get('/:id', getScholarshipById);

// @route   POST /api/scholarships
// @desc    Create a new scholarship
// @access  Public
scholarRouter.post('/', createScholarship);

// @route   PUT /api/scholarships/:id
// @desc    Update a scholarship by ID
// @access  Public
scholarRouter.put('/:id', updateScholarship);

// @route   DELETE /api/scholarships/:id
// @desc    Delete a scholarship by ID
// @access  Public
scholarRouter.delete('/:id', deleteScholarship);

module.exports = scholarRouter;
