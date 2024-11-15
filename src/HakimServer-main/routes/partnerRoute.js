// routes/partner.js
const express = require('express');
const {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner
} = require('../controller/partnerController');
const partnerRouter= express();
// @route   GET /api/partners
// @desc    Get all partners
// @access  Public
partnerRouter.get('/', getPartners);

// @route   GET /api/partners/:id
// @desc    Get a specific partner by ID
// @access  Public
partnerRouter.get('/:id', getPartnerById);

// @route   POST /api/partners
// @desc    Create a new partner
// @access  Public
partnerRouter.post('/', createPartner);

// @route   PUT /api/partners/:id
// @desc    Update a partner by ID
// @access  Public
partnerRouter.put('/:id', updatePartner);

// @route   DELETE /api/partners/:id
// @desc    Delete a partner by ID
// @access  Public
partnerRouter.delete('/:id', deletePartner);

module.exports = partnerRouter;
