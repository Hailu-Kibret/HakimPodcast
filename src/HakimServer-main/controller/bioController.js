// controllers/bioController.js
const Bio = require('../models/bio');

// Get all bios
exports.getAllBios = async (req, res) => {
  try {
    const bios = await Bio.find();
    res.json(bios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single bio by ID
exports.getBioById = async (req, res) => {
  try {
    const bio = await Bio.findById(req.params.id);
    if (!bio) {
      return res.status(404).json({ message: 'Bio not found' });
    }
    res.json(bio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new bio
exports.createBio = async (req, res) => {
  const { name, position, image, details } = req.body;

  const newBio = new Bio({
    name,
    position,
    image,
    details,
  });

  try {
    const savedBio = await newBio.save();
    res.status(201).json(savedBio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a bio
exports.updateBio = async (req, res) => {
  try {
    const { name, position, image, details } = req.body;
    const updatedBio = await Bio.findByIdAndUpdate(
      req.params.id,
      { name, position, image, details },
      { new: true }
    );
    if (!updatedBio) {
      return res.status(404).json({ message: 'Bio not found' });
    }
    res.json(updatedBio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a bio
exports.deleteBio = async (req, res) => {
  try {
    const deletedBio = await Bio.findByIdAndDelete(req.params.id);
    if (!deletedBio) {
      return res.status(404).json({ message: 'Bio not found' });
    }
    res.json({ message: 'Bio deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
