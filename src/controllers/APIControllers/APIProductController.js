const path = require("path");
const db = require("../../database/models");

const APIProductController = {
  list: (req, res) => {
    db.products.findAll({ include: ["productsCategory", "productsImages"] }).then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          count: products.length,
        },
        products: {
          products,
          detail: "api/products/:idProd", 
        },
      };
      res.json(respuesta);
    });
  },

  detailProduct: (req, res) => {
    let url = req.protocol + "://" + req.get('host') + '/img/'
    
    db.sequelize.query(`SELECT products.ProductsName, products.ProductsDescription, products.ProductsPrice, CONCAT('${url}',productsImages.productsImagesNombre) AS urlImage FROM productsImages INNER JOIN products ON products.idProd = productsImages.products_idProd WHERE products.idProd = ${req.params.idProd}`, { type: db.sequelize.QueryTypes.SELECT })
        .then((resultado) => {
          let respuesta = {
            meta: {
              status: 200,
            },
            data: {
              products: resultado,
            },
          };
          res.json(respuesta);
        });
  },

  categoryCount: (req,res)=>{
    db.sequelize.query(`COUNT(DISTINCT(productsCategory_idproductsCategory)) FROM products`, { type: db.sequelize.QueryTypes.SELECT })
        .then((resultado) => {
          let respuesta = {
            meta: {
              status: 200,
            },
            data: {
              products_category: resultado,
            },

          };
        });
  }

}

module.exports = APIProductController;

