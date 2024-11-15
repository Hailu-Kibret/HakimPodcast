// controllers/partnerController.js
const Partner = require('../models/partner');

// @desc    Get all partners
// @route   GET /api/partners
// @access  Public
const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific partner by ID
// @route   GET /api/partners/:id
// @access  Public
const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ msg: 'Partner not found' });
    }
    res.json(partner);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Partner not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new partner
// @route   POST /api/partners
// @access  Public
const createPartner = async (req, res) => {
  const { companyName, email, phone, website, description } = req.body;

  try {
    const newPartner = new Partner({
      companyName,
      email,
      phone,
      website,
      description,
    });

    const savedPartner = await newPartner.save();
    res.json(savedPartner);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a partner by ID
// @route   PUT /api/partners/:id
// @access  Public
const updatePartner = async (req, res) => {
  const { companyName, email, phone, website, description } = req.body;

  // Build partner object
  const partnerFields = {};
  if (companyName) partnerFields.companyName = companyName;
  if (email) partnerFields.email = email;
  if (phone) partnerFields.phone = phone;
  if (website) partnerFields.website = website;
  if (description) partnerFields.description = description;

  try {
    let partner = await Partner.findById(req.params.id);

    if (!partner) return res.status(404).json({ msg: 'Partner not found' });

    partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { $set: partnerFields },
      { new: true }
    );

    res.json(partner);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Partner not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a partner by ID
// @route   DELETE /api/partners/:id
// @access  Public
const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({ msg: 'Partner not found' });
    }

    await partner.deleteOne();

    res.json({ msg: 'Partner removed',
               error : false,
               success : true,
               data:partner
     });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Partner not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
};
