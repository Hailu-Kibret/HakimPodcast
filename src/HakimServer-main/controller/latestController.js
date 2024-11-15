// controllers/contentController.js
const Content = require('../models/latest');

// @desc    Get all content
// @route   GET /api/contents
// @access  Public
const getContents = async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific content by ID
// @route   GET /api/contents/:id
// @access  Public
const getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Content not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new content
// @route   POST /api/contents
// @access  Public
const createContent = async (req, res) => {
  const { image, title, guest, category } = req.body;

  try {
    const newContent = new Content({
      image,
      title,
      guest,
      category,
    });

    const savedContent = await newContent.save();
    res.json(savedContent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a content by ID
// @route   PUT /api/contents/:id
// @access  Public
const updateContent = async (req, res) => {
  const { image, title, guest, category } = req.body;

  // Build content object
  const contentFields = {};
  if (image) contentFields.image = image;
  if (title) contentFields.title = title;
  if (guest) contentFields.guest = guest;
  if (category) contentFields.category = category;

  try {
    let content = await Content.findById(req.params.id);

    if (!content) return res.status(404).json({ msg: 'Content not found' });

    content = await Content.findByIdAndUpdate(
      req.params.id,
      { $set: contentFields },
      { new: true }
    );

    res.json(content);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Content not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a content by ID
// @route   DELETE /api/contents/:id
// @access  Public
const deleteContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    
    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    await content.deleteOne();

    res.json({ msg: 'Content removed', 
               error : false,
               success : true,
               data:content
    });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Content not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getContents,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
};
