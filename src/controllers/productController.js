const path = require('path');

let productController = {
  productCart: (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','productCart.html'))
  },

  productDetail: (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','productDetail.html'))
  }
}

module.exports = productController;
