const express = require('express');
const path = require('path');
const routerProduct = express.Router();
const productController = require(path.join(__dirname,'..','controllers','productController.js'));

routerProduct.get('/product', productController.productCart);
routerProduct.get('/detail',productController.productDetail);
routerProduct.get('/list', productController.productList);


module.exports = routerProduct
