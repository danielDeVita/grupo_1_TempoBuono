const req = require("express/lib/request");

const mainController = {
    home: (req, res) => {
        res.render('index', { styles: 'home' })
    },
}

module.exports = mainController