const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Subscription = require('../models/subscribe');

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mihretabgirma21@gmail.com',
    pass: 'lglixdxpwdrdfgaj',
  },
});

const sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    // Save subscription to MongoDB
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    // Send email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Subscription Confirmation',
      text: `Thank you for subscribing!`,
    };
s
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Subscription failed:', error);
    res.status(500).json({ message: 'Subscription failed.' });
  }
};

const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find('email'); // Fetch only the email field
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).json({ message: 'Error fetching subscriptions.' });
  }
};

module.exports = { sendEmail, getAllSubscriptions };
