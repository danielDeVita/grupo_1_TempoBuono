const path = require('path')

const userController = {
    register: (req, res) =>{
        res.render(path.join('register'))
    }

}

module.exports = userController
