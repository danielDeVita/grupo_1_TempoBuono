const express = require('express');
const path = require('path');
const routerUser = express.Router();
const userController = require(path.join(__dirname,'..','controllers','userController.js'));

/* const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join("../public/img"));
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const uploadFile = multer({storage}); */

routerUser.get('/register',userController.register);



module.exports = routerUser;
