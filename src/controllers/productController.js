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
    modProductoForm: (req, res) => {
                var product = products.find( product => product.id==req.params.id)
                if(product){
                    res.render('modificar', {styles: 'crearProducto', product});
                    }
                else{
                    res.send('404 Not Found ');
                }
        },

    modProducto: (req, res) => {
        products = products.map(product=> {
            if (product.id == req.params.id) {
                product.name = req.body.name,
                    product.price = req.body.price,
                    product.discount = req.body.discount,
                    product.category = req.body.category,
                    product.description = req.body.description,
                    product.image = req.file?.filename ?? "default-image.png"
            }
            return product
        }
    },



    deleteProducto: (req, res)=>{
        //do something
        res.send("producto borrado")
    }
}

module.exports = productController
