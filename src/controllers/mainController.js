const req = require("express/lib/request");

const mainController = {
    home: (req, res) => {
        res.render('index', { styles: 'home', user: req.session.usuarioLogueado})
    },
}

module.exports = mainController