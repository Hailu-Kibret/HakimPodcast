// routes/bioRoutes.js
const express = require('express');
const routerBio = express();
const bioController = require('../controller/bioController');

routerBio.get('/', bioController.getAllBios);
routerBio.get('/:id', bioController.getBioById);
routerBio.post('/', bioController.createBio);
routerBio.put('/:id', bioController.updateBio);
routerBio.delete('/:id', bioController.deleteBio);

module.exports = routerBio;
