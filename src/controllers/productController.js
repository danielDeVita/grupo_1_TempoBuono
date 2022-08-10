/* const fs = require("fs");
const path = require("path"); */
const { validationResult } = require('express-validator');
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
        if (!producto) {
          res.render("404")
        } else
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
  cafeList: (req, res) => {
    db.products
      .findAll({
        include: [{ association: "productsImages" }],
        where: { productsCategory_idproductsCategory: 2 },
      })
      .then((products) => {
        res.render("cafe", {
          products,
          styles: "productList",
          user: req.session.usuarioLogueado,
        });
      });
  },
  alfajorList: (req, res) => {
    db.products
      .findAll({
        include: [{ association: "productsImages" }],
        where: { productsCategory_idproductsCategory: 1 },
      })
      .then((products) => {
        res.render("alfajores", {
          products,
          styles: "productList",
          user: req.session.usuarioLogueado,
        });
      });
  },
  comboList: (req, res) => {
    db.products
      .findAll({
        include: [{ association: "productsImages" }],
        where: { productsCategory_idproductsCategory: 3 },
      })
      .then((products) => {
        res.render("combos", {
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
    const errors = validationResult(req)

    if (errors.errors.length > 0) {
      return res.render('crear', { styles: "crearProducto", errors: errors.mapped(), old: req.body });
    } else {
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
    }
  },
  modProductoForm: (req, res) => {
    db.products.findByPk(req.params.idProd, {
      include: ["productsImages", "productsCategory"],
    })
      .then((producto) => {
        /*  return res.json(producto) */
        return res.render("modificar", {
          producto,
          styles: "modificar",
          user: req.session.usuarioLogueado,
        });
      });
  },
  modProducto: (req, res) => {
    const errors = validationResult(req)
    if (errors.errors.length > 0) {
      db.products
        .findByPk(req.params.idProd, {
          include: ["productsImages", "productsCategory"],
        })
        .then((producto) => {
          return res.render('modificar', { producto, styles: "modificar", errors: errors.mapped(), old: req.body });
        })
    } else {
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
          db.productsImages.update(
            {
              productsImagesNombre: req.file?.filename ?? "default image coffee.png",
              productsImagesDesc: "",
              products_idProd: req.params.idProd
            },
            {
              where: { products_idProd: req.params.idProd }
            },
          )
            .then(() => {
              return res.redirect("/products");
            })
        })
        .catch((error) => console.error(error));
    }
  },
  deleteProducto: (req, res) => {
    db.products.destroy(
      {
        where: { idProd: req.params.idProd }
      }
    )
      .then(() => {
        return res.redirect("/products");
      })
      .catch(err => console.error(err))
  },
};

module.exports = productController;
