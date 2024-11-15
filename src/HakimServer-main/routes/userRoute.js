const express = require('express');
const { register, login, getUser, logout } = require('../controller/usersController');
const checkAuthentication = require('../middleware/checkAuthentication');
const userRouter= express();

// Register route
userRouter.post('/register', register);

// Login route
userRouter.post('/login',checkAuthentication,  login);

// Get user info route
userRouter.get('/user', checkAuthentication, getUser);

// Logout route
userRouter.post('/logout', logout);

module.exports = userRouter;
