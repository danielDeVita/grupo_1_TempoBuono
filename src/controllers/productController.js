const path = require('path')

const productController = {
    productCart: (req, res) =>{
        res.render('productCart');
    },

    productDetail: (req, res) =>{
        res.render('productDetail');
    }
}

module.exports = productController
