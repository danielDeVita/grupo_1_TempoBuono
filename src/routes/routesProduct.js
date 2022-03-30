const express = require('express');
const path = require('path');
const routerProduct = express.Router();
const productController = require(path.join(__dirname,'..','controllers','productController.js'));

routerProduct.get('/cart', productController.productCart);
routerProduct.get('/products/:id',productController.productDetail);
routerProduct.get('/product', productController.productList);
routerProduct.get('/products/create',productController.crearProducto);
routerProduct.post('/products',productController.crearProducto);
routerProduct.get('/modificar',productController.modProducto)


module.exports = routerProduct
