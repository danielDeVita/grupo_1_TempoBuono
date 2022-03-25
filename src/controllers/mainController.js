const path = require('path')

const mainController = {
    home: (req, res) =>{
        res.render('index')
    },

    login: (req, res) =>{
        res.render('login')
    }
}

module.exports = mainController
