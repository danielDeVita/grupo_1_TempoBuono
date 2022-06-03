//const { render,redirect } = require('express/lib/response');
const fs = require('fs')
const path = require('path');
/* let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')); */
const db = require("../database/models")

/* function productsShowTrue(){
return products = products.filter(product => product.show ==true);
} */

const productController = {
    productCart: (req, res) => {
        res.render('productCart', {styles: "productCart", user: req.session.usuarioLogueado});
    },

    productDetail: (req, res) => { //ok, falta solo agregar imagenes en la DB
        db.products.findByPk(req.params.idProd,
            {include:["productsImages", "productsCategory"]})
            .then(producto=>{
                return res.render('productDetail', {producto, styles: 'productDetail', user: req.session.usuarioLogueado});
            })
        //let producto = products.find(producto=>producto.id==req.params.id)
        //return res.render('productDetail', {producto, styles: 'productDetail', user: req.session.usuarioLogueado});
    },

    productList: (req, res) => { //ok, falta solo agregar imagenes en la DB
        db.products.findAll({
            include:["productsImages"]
        })
            .then(products=>{
                res.render('productList', {products, styles: "productList", user: req.session.usuarioLogueado});
            })
        /* let products = productsShowTrue();
        res.render('productList', {products, styles: "productList", user: req.session.usuarioLogueado}); */
    },

    crearProductoForm: (req, res) => { 
		return res.render('crear', {styles: "crearProducto", user: req.session.usuarioLogueado})
	}, 
    
    crearProducto: (req, res) => {
        let arrayProductos = [...products]
        let newProduct = {
            id: arrayProductos.length > 0 ? arrayProductos[arrayProductos.length -1].id + 1 : 1,
            name: req.body.nombre_producto,
            description: req.body.descripcion_producto,
            price: req.body.precio_producto,
            category: "", //Es un recordatorio, el category se saca de: req.body
            image: req.file?.filename ?? "default-image.png",
            show:true
        }
        arrayProductos.push(newProduct);
		fs.writeFileSync(path.join(__dirname, '../data/products.json'), (JSON.stringify(arrayProductos, null, 2)));
		return res.redirect('/products');
    },

    modProductoForm: (req, res) => {
                var product = products.find( product => product.id==req.params.id)
                if(product){
                    res.render('modificar', {styles: 'crearProducto', product, user: req.session.usuarioLogueado});
                    }
                else{
                    res.send('404 Not Found ');
                }
        },

    modProducto: (req, res) => {
        // let arrayProducts = [...products]
        let modProduct = products.map( product=> {
                if (product.id == req.params.id) {
                        product.name = req.body.nombre_producto,
                        product.price = req.body.precio_producto,
                        product.category = req.body.categoria,
                        product.description = req.body.descripcion_producto,
                        product.image = req.file?.filename ?? "default-image.png"
                                                    }
            return product                                       
        });

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), (JSON.stringify(modProduct, null, 2)));
		return res.redirect('/products');

    },

    deleteProducto: (req, res)=>{
        const id = req.params.id;
        products= products.map(product => {
            if (product.id == id){
                product.show = false
            }
            return product; //producto a borrar
        });
     
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), (JSON.stringify(products, null, 2)));
		return res.redirect('/products');
    }

}

module.exports = productController
