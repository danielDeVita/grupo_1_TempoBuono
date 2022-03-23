const path = require('path')

const mainController = {
    home: (req, res) =>{
        res.sendfile(path.join(__dirname,'..','views','index.html'))
    },

    login: (req, res) =>{
        res.sendfile(path.join(__dirname,'..','views','login.html'))
    }
}

module.exports = mainController
