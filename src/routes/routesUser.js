const express = require('express');
const path = require('path');
const routerUser = express.Router();
const userController = require(path.join(__dirname,'..','controllers','userController.js'));

routerUser.get('/register',userController.register);
routerUser.post("/register", userController.create);



module.exports = routerUser;
