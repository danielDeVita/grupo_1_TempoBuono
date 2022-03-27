const express = require('express');
const path = require('path');
const routerUser = express.Router();
const userController = require(path.join(__dirname,'..','controllers','userController.js'));

routerUser.get('/register',userController.register);
routerUser.get('/crear', userController.crearProducto);
routerUser.get('/modificar', userController.modProducto)


module.exports = routerUser;
