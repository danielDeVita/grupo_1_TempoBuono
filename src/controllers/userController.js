

const userController = {
    register: (req, res) =>{
        res.render('register')
    },
    crearProducto: (req, res)=>{
        res.render('crear')
    }

}

module.exports = userController
