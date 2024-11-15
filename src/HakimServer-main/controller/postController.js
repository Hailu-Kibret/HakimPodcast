// controller/postController.js
const Job = require('../models/job');

// Create a new job posting
const postJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all job postings
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a job posting by ID
const getJobsById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.status(200).send(job);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a job posting by ID
const updateJobsById = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.status(200).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a job posting by ID
const deleteJobsById = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).send('Job not found');
    }
    res.status(200).send(job);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postJob,
  getJobs,
  getJobsById,
  updateJobsById,
  deleteJobsById
};
