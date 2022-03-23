const path = require('path')

const productController = {
    productCart: (req, res) =>{
        res.sendfile(path.join(__dirname,'..','views','productCart.html'));
    },

    productDetail: (req, res) =>{
        res.sendfile(path.join(__dirname,'..','views','productDetail.html'));
    }
}

module.exports = productController
