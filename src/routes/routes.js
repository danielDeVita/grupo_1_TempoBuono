const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require(path.join(__dirname,'..','controllers','mainController.js'));
const userController = require(path.join(__dirname,'..','controllers','userController.js'));
const productController = require(path.join(__dirname,'..','controllers','productController.js'));

router.get('/',mainController.home);
router.get('/login', mainController.login);
router.get('/product', productController.productCart);
router.get('/detail',productController.productDetail);
router.get('/user',userController.register)


module.exports = router;
