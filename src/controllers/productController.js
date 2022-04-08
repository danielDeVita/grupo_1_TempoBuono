const { render } = require('express/lib/response');
const fs = require('fs')
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json'); 
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    productCart: (req, res) => {
        res.render('productCart');
    },

    productDetail: (req, res) => {
        let producto = products.find(producto=>producto.id==req.params.id)
        return res.render('productDetail', {producto, styles: 'productDetail'});
    },

    productList: (req, res) => {
        res.render('productList', {products});
    },
    crearProducto: (req, res) => {
        let arrayProductos = [...products]
        let newProduct = {
            id: arrayProductos.length > 0 ? arrayProductos[arrayProductos.length -1].id + 1 : 1,
            name: req.body.nombre_producto,
            description: req.body.descripcion_producto,
            price: req.body.precio_producto,
            category: "", //req.body
            image: req.file?.filename ?? "default-image.png"
        }
        arrayProductos.push(newProduct);
		fs.writeFileSync(path.join(__dirname, '../data/products.json'), (JSON.stringify(arrayProductos, null, 2)));
		return res.redirect('/products');
    },
    modProducto: (req, res) => {
        //res.render('modificar', {styles: 'crearProducto'})
        switch(req.method){
            case "GET":
                var product = products.find( product => product.id==req.params.id)
                if(product){
                    res.render('modificar', {styles: 'crearProducto', product});
                    }
                else{
                    res.send('404 Not Found ');
                }

            }

        },
        /* find del productID y compararlo con el req.params.ID 
        y luego modificar cada propiedad con el req.body.propiedad
        PEEEERO HAY QUE HACER UN SWITCH CASE ENTRE GET Y PUT */
        //do something

    deleteProducto: (req, res)=>{
        //do something
        res.send("producto borrado")
    }
}

module.exports = productController
