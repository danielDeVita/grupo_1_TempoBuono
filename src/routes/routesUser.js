const express = require('express');
const path = require('path');
const routerUser = express.Router();
const userController = require(path.join(__dirname,'..','controllers','userController.js'));
const validator = require(path.join(__dirname,'..','middleware', 'express-validator.js'));

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname,"/../../public/img/users"));
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const uploadFile = multer({storage});

routerUser.get('/register',userController.register);
routerUser.post("/register", uploadFile.single("imagen_usuario"), validator, userController.create);



module.exports = routerUser;
