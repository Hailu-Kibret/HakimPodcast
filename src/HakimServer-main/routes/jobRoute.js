// routes/job.js
const express = require('express');
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob
} = require('../controller/jobController');
const jobRouter = express();
// @route   GET /api/jobs
// @desc    Get all jobs
// @access  Public
jobRouter.get('/', getJobs);

// @route   GET /api/jobs/:id
// @desc    Get a specific job by ID
// @access  Public
jobRouter.get('/:id', getJobById);

// @route   POST /api/jobs
// @desc    Create a new job
// @access  Public
jobRouter.post('/', createJob);

// @route   PUT /api/jobs/:id
// @desc    Update a job by ID
// @access  Public
jobRouter.put('/:id', updateJob);

// @route   DELETE /api/jobs/:id
// @desc    Delete a job by ID
// @access  Public
jobRouter.delete('/:id', deleteJob);

module.exports = jobRouter;
