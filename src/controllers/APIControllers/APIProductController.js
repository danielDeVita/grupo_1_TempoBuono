const path = require("path");
const db = require("../../database/models");

const APIProductController = {
    list: (req, res) => {
      db.products.findAll().then((products) => {
        let respuesta = {
          meta: {
            status: 200,
            count: products.length,
          },
          products: {
            products, //nos falta también un array con principal relación de uno a muchos
            detail: "api/products/:idProd", //cómo se resuelve?
          },
        };
        res.json(respuesta);
      });
    },

    detailProduct: (req, res) => {
        db.products.findByPk(req.params.idProd).then((product) => {
          let respuesta = {
            meta: {
              status: 200,
            },
            data: { //nos falta también un array con principal relación de uno a muchos
                id: product.idProd,
                name: product.ProductsName,
                description: product.ProductsDescription,
                price: product.ProductsPrice,
                urlImage: "No sabemos" // Estamos investigando como resolverlo.
            }
          };
          res.json(respuesta);
        });
      },


}

module.exports = APIProductController;