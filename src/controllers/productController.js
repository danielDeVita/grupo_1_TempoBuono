

const productController = {
    productCart: (req, res) =>{
        res.render('productCart');
    },

    productDetail: (req, res) =>{
        res.render('productDetail');
    },
    
    productList: (req, res)=> {

        let productos = [
            {
                titulo: "Alfajor Mar Del Plata" ,
                descripcion: "Dos galletitas rellenas del mas delicioso Dulce de Leche, cubiertas con chocolate semi-amargo de máxima pureza.",
                precio: "USD 50",
                categoria: "Alfajores",
                imagen: ""
            },
            {
                titulo: "Café Sierra" ,
                descripcion: "Un cafê con gratas notas aromáticas dulces y afrutadas que recuerdan el caramelo y un suave chocolate oscuro, de máxima pureza.",
                precio: "USD 300",
                categoria: "Cafés",
                imagen: ""
            },
            {
                titulo: "Sierra Marplatense" ,
                descripcion: "Una combinación perfecta que logra reslatar el aroma del café con el toque dulce del alfajor, de máxima pureza.",
                precio: "USD 325",
                categoria: "Combos",
                imagen: ""
            }
        ]
        res.render('productList', {productos})
    }
}

module.exports = productController
