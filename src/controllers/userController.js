

const userController = {
    register: (req, res) =>{
        res.render('register')
    },
    crearProducto: (req, res)=>{
        res.render('crear')
    },
    modProducto: (req, res)=>{
        res.render('modificar')
    }

}

module.exports = userController
