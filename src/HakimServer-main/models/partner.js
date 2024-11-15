const mongoose = require('mongoose');
const partnerSchema = new mongoose.Schema({
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      minlength: [3, 'Company name must be at least 3 characters long'],
      maxlength: [100, 'Company name must be less than 100 characters long'],
    },
    email: {
      type: String,
      required: false,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      minlength: [10, 'Phone number must be at least 10 digits long'],
      maxlength: [15, 'Phone number must be less than 15 digits long'],
    },
    website: {
      type: String,
      required: false,
      match: [/^https?:\/\/[^\s$.?#].[^\s]*$/, 'Please fill a valid URL'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [500, 'Description must be less than 500 characters long'],
    },
  });
  
  const Partner = mongoose.model('Partner', partnerSchema);
  module.exports = Partner;