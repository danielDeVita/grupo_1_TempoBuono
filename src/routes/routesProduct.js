const express = require('express');
const path = require('path');
const routerProduct = express.Router();
const productController = require(path.join(__dirname,'..','controllers','productController.js'));
const validatorProducts = require(path.join(__dirname, '..', 'middleware', 'express-validator-products.js'));
// const { body } = require('express-validator');

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname,"/../../public/img"));
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const uploadFile = multer({storage});

routerProduct.get('/cart', productController.productCart); //agregarle un /products y corregir app.js
routerProduct.get('/', productController.productList);
routerProduct.get('/create',productController.crearProductoForm);
routerProduct.post('/create', uploadFile.single("imagen_producto"),validatorProducts,productController.crearProducto);
routerProduct.get('/:idProd',productController.productDetail);
routerProduct.get('/:idProd/edit',productController.modProductoForm);
routerProduct.put('/:idProd/edit', uploadFile.single("imagen_producto"),validatorProducts,productController.modProducto);
routerProduct.delete('/:idProd/edit',productController.deleteProducto);

module.exports = routerProduct
