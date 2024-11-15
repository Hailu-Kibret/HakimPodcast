const mongoose = require('mongoose');
const validator = require('validator'); // Make sure to install 'validator' package

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    minlength: [3, 'Full name must be at least 3 characters long'],
    maxlength: [100, 'Full name must be less than 100 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: [validator.isEmail, 'Invalid email address'], // Using validator package
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    minlength: [3, 'Subject must be at least 3 characters long'],
    maxlength: [200, 'Subject must be less than 200 characters long'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: [10, 'Message must be at least 10 characters long'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
