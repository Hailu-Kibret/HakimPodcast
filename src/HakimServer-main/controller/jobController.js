// controllers/jobController.js
const Job = require('../models/job');

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific job by ID
// @route   GET /api/jobs/:id
// @access  Public
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Public
const createJob = async (req, res) => {
  const {
    title,
    description,
    experience,
    deadline,
    location,
    jobType,
    qualifications,
    keyResponsibilities,
    keySkills,
    languages,
    startDate,
    email,
    phone,
  } = req.body;

  try {
    const newJob = new Job({
      title,
      description,
      experience,
      deadline,
      location,
      jobType,
      qualifications,
      keyResponsibilities,
      keySkills,
      languages,
      startDate,
      email,
      phone,
    });

    const savedJob = await newJob.save();
    res.json(savedJob);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a job by ID
// @route   PUT /api/jobs/:id
// @access  Public
const updateJob = async (req, res) => {
  const {
    title,
    description,
    experience,
    deadline,
    location,
    jobType,
    qualifications,
    keyResponsibilities,
    keySkills,
    languages,
    startDate,
    email,
    phone,
  } = req.body;

  // Build job object
  const jobFields = {};
  if (title) jobFields.title = title;
  if (description) jobFields.description = description;
  if (experience) jobFields.experience = experience;
  if (deadline) jobFields.deadline = deadline;
  if (location) jobFields.location = location;
  if (jobType) jobFields.jobType = jobType;
  if (qualifications) jobFields.qualifications = qualifications;
  if (keyResponsibilities) jobFields.keyResponsibilities = keyResponsibilities;
  if (keySkills) jobFields.keySkills = keySkills;
  if (languages) jobFields.languages = languages;
  if (startDate) jobFields.startDate = startDate;
  if (email) jobFields.email = email;
  if (phone) jobFields.phone = phone;

  try {
    let job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ msg: 'Job not found' });

    job = await Job.findByIdAndUpdate(
      req.params.id,
      { $set: jobFields },
      { new: true }
    );

    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a job by ID
// @route   DELETE /api/jobs/:id
// @access  Public
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    await job.deleteOne();

    res.json({ msg: 'Job removed',
      error : false,
      success : true,
      data:job
     });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
