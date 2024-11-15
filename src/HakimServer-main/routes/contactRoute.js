// routes/contact.js
const express = require('express');
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controller/contactController');
const contactRouter = express();
// @route   GET /api/contact
// @desc    Get all contact messages
// @access  Public
contactRouter.get('/', getContacts);

// @route   GET /api/contact/:id
// @desc    Get a specific contact message by ID
// @access  Public
contactRouter.get('/:id', getContactById);

// @route   POST /api/contact
// @desc    Create a new contact message
// @access  Public
contactRouter.post('/', createContact);

// @route   PUT /api/contact/:id
// @desc    Update a contact message by ID
// @access  Public
contactRouter.put('/:id', updateContact);

// @route   DELETE /api/contact/:id
// @desc    Delete a contact message by ID
// @access  Public
contactRouter.delete('/:id', deleteContact);

module.exports = contactRouter;
         