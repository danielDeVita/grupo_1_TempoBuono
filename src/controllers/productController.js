

const productController = {
    productCart: (req, res) =>{
        res.render('productCart');
    },

    productDetail: (req, res) =>{
        res.render('productDetail');
    },
    
    productList: (req, res)=> {
        res.render('productList')
    }
}

module.exports = productController
