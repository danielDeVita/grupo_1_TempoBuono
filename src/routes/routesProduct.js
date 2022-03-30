const express = require('express');
const path = require('path');
const routerProduct = express.Router();
const productController = require(path.join(__dirname,'..','controllers','productController.js'));

routerProduct.get('/cart', productController.productCart);
routerProduct.get('/product', productController.productList);
routerProduct.get('/products/create',productController.crearProducto);
routerProduct.post('/products',productController.crearProducto);
routerProduct.get('/products/:id',productController.productDetail);
routerProduct.get('/products/:id/edit',productController.modProducto);
routerProduct.put('/products/:id/',productController.modProducto);
routerProduct.delete('/products/:id/',productController.deleteProducto);

module.exports = routerProduct
