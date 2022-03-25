let express = require('express');
let router = express.Router();
const path = require("path");
let productController = require(path.join(__dirname,'../controllers/productController.js'));

router.get('/detail', productController.productDetail);
router.get('/cart', productController.productCart);

module.exports = router;