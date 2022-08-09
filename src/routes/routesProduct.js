const express = require('express');
const path = require('path');
const routerProduct = express.Router();
const productController = require(path.join(__dirname,'..','controllers','productController.js'));
const validatorProducts = require(path.join(__dirname, '..', 'middleware', 'express-validator-products.js'));
const authMiddleware = require("../middleware/authMiddleware");
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

routerProduct.get('/cart', authMiddleware, productController.productCart); 
routerProduct.get('/', productController.productList);
routerProduct.get('/cafe', productController.cafeList);
routerProduct.get('/alfajor', productController.alfajorList);
routerProduct.get('/combos',productController.comboList);
routerProduct.get('/create', authMiddleware, productController.crearProductoForm);
routerProduct.post('/create', uploadFile.single("imagen_producto"),validatorProducts,productController.crearProducto);
routerProduct.get('/:idProd',productController.productDetail);
routerProduct.get('/:idProd/edit', authMiddleware, productController.modProductoForm);
routerProduct.put('/:idProd/edit', uploadFile.single("imagen_producto"),validatorProducts,productController.modProducto);
routerProduct.delete('/:idProd/edit',productController.deleteProducto);

module.exports = routerProduct
