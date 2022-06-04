const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const productController = {
  productCart: (req, res) => {
    res.render("productCart", {
      styles: "productCart",
      user: req.session.usuarioLogueado,
    });
  },

  productDetail: (req, res) => {
    db.products
      .findByPk(req.params.idProd, {
        include: ["productsImages", "productsCategory"],
      })
      .then((producto) => {
        return res.render("productDetail", {
          producto,
          styles: "productDetail",
          user: req.session.usuarioLogueado,
        });
      });
  },

  productList: (req, res) => {
    db.products
      .findAll({
        include: ["productsImages"],
      })
      .then((products) => {
        res.render("productList", {
          products,
          styles: "productList",
          user: req.session.usuarioLogueado,
        });
      });
  },

  crearProductoForm: (req, res) => {
    return res.render("crear", {
      styles: "crearProducto",
      user: req.session.usuarioLogueado,
    });
  },

  crearProducto: (req, res) => {
    db.products.create({
      ProductsName: req.body.nombre_producto,
      ProductsDescription: req.body.descripcion_producto,
      ProductsPrice: req.body.precio_producto,
      productsCategory_idproductsCategory: req.body.categoria
    })
      .then((product) => {
        db.productsImages.create({
          productsImagesNombre: req.file?.filename ?? "default image coffee.png",
          productsImagesDesc: "",
          products_idProd: product.idProd
        })
          .then(() => {
            return res.redirect("/products");
          })
      })
      .catch((error) => console.error(error));
  },

  modProductoForm: (req, res) => {
    db.products.findByPk(req.params.idProd, {
      include: ["productsImages", "productsCategory"],
    })
      .then((producto) => {
        return res.render("modificar", {
          producto,
          styles: "crearProducto",
          user: req.session.usuarioLogueado,
        });
      });
  },

  modProducto: (req, res) => {
    db.products.update(
      {
        ProductsName: req.body.nombre_producto,
        ProductsDescription: req.body.descripcion_producto,
        ProductsPrice: req.body.precio_producto,
        productsCategory_idproductsCategory: req.body.categoria,
      },
      {
        where: { idProd: req.params.idProd },
      }
    )
      .then((product) => {
        db.productsImages.update({
          productsImagesNombre: req.file?.filename ?? "default image coffee.png",
          productsImagesDesc: "",
          products_idProd: product.idProd
        },
        )
          .then(() => {
            return res.redirect("/products");
          })
      })

      .catch((error) => console.error(error));
  },

  deleteProducto: (req, res) => {
    let id = req.params.idProd;
    db.products.destroy({ where: { idProd: id }, force: true })
      .then(() => {
        return res.redirect("/products");
      })
      .catch(err => console.error(err))
  },
};

module.exports = productController;
