const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require(path.join(__dirname,'..','controllers','mainController.js'));

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

router.get('/',mainController.home);
router.get('/login', mainController.login);




module.exports = router;
