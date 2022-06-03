const express = require('express');
const path = require('path');
const routerProduct = express.Router();
const productController = require(path.join(__dirname,'..','controllers','productController.js'));

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

routerProduct.get('/cart', productController.productCart);
routerProduct.get('/products', productController.productList);
routerProduct.get('/products/create',productController.crearProductoForm);
routerProduct.post('/products/create', uploadFile.single("imagen_producto"),productController.crearProducto);
routerProduct.get('/products/:idProd',productController.productDetail);
routerProduct.get('/products/:idProd/edit',productController.modProductoForm);
routerProduct.put('/products/:idProd/edit', uploadFile.single("imagen_producto"),productController.modProducto);
routerProduct.delete('/products/:idProd/edit',productController.deleteProducto);

module.exports = routerProduct
