// routes/Subscribe.js
const express = require('express');
const {sendEmail,getAllSubscriptions } = require('../controller/subscribeController');
const subscribeRouter= express();

subscribeRouter.post('/',sendEmail);
subscribeRouter.get('/',getAllSubscriptions );
module.exports = subscribeRouter;