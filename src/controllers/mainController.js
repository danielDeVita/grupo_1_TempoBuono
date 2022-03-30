

const mainController = {
    home: (req, res) =>{
        res.render('index',{ styles: 'home'})
    },

    login: (req, res) =>{
        res.render('login',{ styles: 'login'})
    }
}

module.exports = mainController
