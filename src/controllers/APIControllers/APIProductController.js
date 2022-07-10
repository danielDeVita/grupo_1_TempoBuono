const path = require("path");
const db = require("../../database/models");

const APIProductController = {
  list: (req, res) => {
    db.products.findAll({ include: ["productsCategory"] }).then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          count: products.length,
        },
        products: {
          products,
          detail: /* products.map(product, index)=>{} */"api/products/:idProd", //cómo se resuelve? (hacer un map del array productos y meterle el detail)
        },
      };
      res.json(respuesta);
    });
  },

  detailProduct: (req, res) => {

    //let prueba = db.sequelize.query(`SELECT products.idProd, productsImages.productsImagesNombre FROM products INNER JOIN productsImages ON products.idProd = productsImages.products_idProd`, { type: db.sequelize.QueryTypes.SELECT })

    db.products.findByPk(req.params.idProd).then((product) => { //hacer un include con category/images, pero no funciona
      let respuesta = {
        meta: {
          status: 200,
        },
        data: { //nos falta también un array con principal relación de uno a muchos
          id: product.idProd,
          name: product.ProductsName,
          description: product.ProductsDescription,
          price: product.ProductsPrice,
          urlImage: "No sabemos"  // Estamos investigando como resolverlo. (map del array) 
        }
      };
      res.json(respuesta);
    });
  },
}

module.exports = APIProductController;

