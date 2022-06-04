//const { render,redirect } = require('express/lib/response');
const fs = require("fs");
const path = require("path");
/* let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')); */
const db = require("../database/models");

/* function productsShowTrue(){
return products = products.filter(product => product.show ==true);
} */

const productController = {
  productCart: (req, res) => {
    res.render("productCart", {
      styles: "productCart",
      user: req.session.usuarioLogueado,
    });
  },

  productDetail: (req, res) => {
    //ok, falta solo agregar imagenes en la DB
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
    //let producto = products.find(producto=>producto.id==req.params.id)
    //return res.render('productDetail', {producto, styles: 'productDetail', user: req.session.usuarioLogueado});
  },

  productList: (req, res) => {
    //ok, falta solo agregar imagenes en la DB
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
    /* let products = productsShowTrue();
        res.render('productList', {products, styles: "productList", user: req.session.usuarioLogueado}); */
  },

  crearProductoForm: (req, res) => {
    return res.render("crear", {
      styles: "crearProducto",
      user: req.session.usuarioLogueado,
    });
  },

  crearProducto: (req, res) => {
    db.products
      // let arrayProductos = [...products]
      .create({
        // id: arrayProductos.length > 0 ? arrayProductos[arrayProductos.length -1].id + 1 : 1,
        ProductsName: req.body.nombre_producto,
        ProductsDescription: req.body.descripcion_producto,
        ProductsPrice: req.body.precio_producto,
        productsCategory_idproductsCategory: req.body.categoria, // El valor 1,2 o 3, por select/option
        productsImagesNombre: req.file?.filename ?? "default-image.png",
        // show:true
      })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => console.error(error));
    // arrayProductos.push(newProduct);
    // fs.writeFileSync(path.join(__dirname, '../data/products.json'), (JSON.stringify(arrayProductos, null, 2)));
  },

  modProductoForm: (req, res) => {
    db.products
      .findByPk(req.params.idProd, {
        include: ["productsImages", "productsCategory"],
      })
      .then((producto) => {
        return res.render("modificar", {
          producto,
          styles: "crearProducto",
          user: req.session.usuarioLogueado,
        });
      });

    // if (product) {
    //     res.render('modificar', { styles: 'crearProducto', product, user: req.session.usuarioLogueado });
    // }
    // else {
    //     res.send('404 Not Found ');
    // }
  },

  modProducto: (req, res) => {
    // let arrayProducts = [...products]
    db.products
      .update(
        {
          ProductsName: req.body.nombre_producto,
          ProductsDescription: req.body.descripcion_producto,
          ProductsPrice: req.body.precio_producto,
          productsCategory_idproductsCategory: req.body.categoria,
          productsImagesNombre: req.file?.filename ?? "default-image.png",
        }, //Preguntar a fede como subir imagenes a DB.

        {
          where: { idProd: req.params.idProd }, //Comparación id modelo con id URL.
        }
      )
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => console.error(error));

    // let modProduct = products.map(product => {
    //     if (product.id == req.params.id) {
    //         product.name = req.body.nombre_producto,
    //             product.price = req.body.precio_producto,
    //             product.category = req.body.categoria,
    //             product.description = req.body.descripcion_producto,
    //             product.image = req.file?.filename ?? "default-image.png"
    //     }
    //     return product
    // });

    // fs.writeFileSync(path.join(__dirname, '../data/products.json'), (JSON.stringify(modProduct, null, 2)));
    // return res.redirect('/products');
  },

  deleteProducto: (req, res) => {
    const id = req.params.id;
    products = products.map((product) => {
      if (product.id == id) {
        product.show = false;
      }
      return product; //producto a borrar
    });

    fs.writeFileSync(
      path.join(__dirname, "../data/products.json"),
      JSON.stringify(products, null, 2)
    );
    return res.redirect("/products");
  },
};

module.exports = productController;
