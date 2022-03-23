const path = require('path')

const userController = {
    register: (req, res) =>{
        res.sendfile(path.join(__dirname,'..','views','register.html'))
    }

}

module.exports = userController
