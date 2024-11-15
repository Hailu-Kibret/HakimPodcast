// controllers/scholarshipController.js
const Scholarship = require('../models/scholar');

// @desc    Get all scholarships
// @route   GET /api/scholarships
// @access  Public
const getScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific scholarship by ID
// @route   GET /api/scholarships/:id
// @access  Public
const getScholarshipById = async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) {
      return res.status(404).json({ msg: 'Scholarship not found' });
    }
    res.json(scholarship);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Scholarship not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new scholarship
// @route   POST /api/scholarships
// @access  Public
const createScholarship = async (req, res) => {
  const { title, date, author, category, comments, image, link } = req.body;

  try {
    const newScholarship = new Scholarship({
      title,
      date,
      author,
      category,
      comments,
      image,
      link,
    });

    const savedScholarship = await newScholarship.save();
    res.json(savedScholarship);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a scholarship by ID
// @route   PUT /api/scholarships/:id
// @access  Public
const updateScholarship = async (req, res) => {
  const { title, date, author, category, comments, image, link } = req.body;

  // Build scholarship object
  const scholarshipFields = {};
  if (title) scholarshipFields.title = title;
  if (date) scholarshipFields.date = date;
  if (author) scholarshipFields.author = author;
  if (category) scholarshipFields.category = category;
  if (comments) scholarshipFields.comments = comments;
  if (image) scholarshipFields.image = image;
  if (link) scholarshipFields.link = link;

  try {
    let scholarship = await Scholarship.findById(req.params.id);

    if (!scholarship) return res.status(404).json({ msg: 'Scholarship not found' });

    scholarship = await Scholarship.findByIdAndUpdate(
      req.params.id,
      { $set: scholarshipFields },
      { new: true }
    );

    res.json(scholarship);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Scholarship not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a scholarship by ID
// @route   DELETE /api/scholarships/:id
// @access  Public
const deleteScholarship = async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);

    if (!scholarship) {
      return res.status(404).json({ msg: 'Scholarship not found' });
    }

    await scholarship.deleteOne();

    res.json({ msg: 'Scholarship removed',
               error : false,
               success : true,
               data:scholarship
     });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Scholarship not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getScholarships,
  getScholarshipById,
  createScholarship,
  updateScholarship,
  deleteScholarship,
};
