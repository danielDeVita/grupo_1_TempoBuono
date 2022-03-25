const path = require('path')

const userController = {
    register: (req, res) =>{
        res.render(path.join('register.ejs'))
    }

}

module.exports = userController
