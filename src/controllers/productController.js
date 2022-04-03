

const productController = {
    productCart: (req, res) => {
        res.render('productCart');
    },

    productDetail: (req, res) => {
        res.render('productDetail');
    },

    productList: (req, res) => {

        let productos = [
            {
                titulo: "Alfajor Mar Del Plata",
                descripcion: "Dos galletitas rellenas del mas delicioso Dulce de Leche, cubiertas con chocolate semi-amargo de máxima pureza.",
                precio: "USD 50",
                categoria: "Alfajores",
                imagen: "/img/img_alfajor_marplatense.png"
            },
            {
                titulo: "Café Sierra",
                descripcion: "Un cafê con gratas notas aromáticas dulces y afrutadas que recuerdan el caramelo y un suave chocolate oscuro, de máxima pureza.",
                precio: "USD 300",
                categoria: "Cafés",
                imagen: "/img/img_cafe_sierra.png"
            },
            {
                titulo: "Sierra Marplatense",
                descripcion: "Una combinación perfecta que logra reslatar el aroma del café con el toque dulce del alfajor, de máxima pureza.",
                precio: "USD 325",
                categoria: "Combos",
                imagen: "/img/img_alfajorMarPlata_CafeSierra.png"
            }
        ]
        res.render('productList', { productos: productos })
    },
    crearProducto: (req, res) => {
        switch (req.method) {
            case "GET":
                res.render('crear',{styles: 'crearProducto'});
            case "POST":
            // do something;
                /* res.send("producto creado"); */
                res.render('crear', {styles: 'crearProducto'});
            default:
                res.render("index");
        }
    },
    modProducto: (req, res) => {
        res.render('modificar')
        //do something
    },
    deleteProducto: (req, res)=>{
        //do something
    }
}

module.exports = productController
