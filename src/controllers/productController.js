const path = require('path')

const productController = {
    productCart: (req, res) =>{
        res.render('productCart.ejs');
    },

    productDetail: (req, res) =>{
        res.render('productDetail');
    }
}

module.exports = productController
