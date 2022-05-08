const fs = require("fs"); //agrego dani
const path = require("path"); //agrego dani
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8')); //agrego dani
const { validationResult } = require('express-validator'); //agrego dani
const bcryptjs = require('bcryptjs'); //agrego dani
const req = require("express/lib/request");

const mainController = {
    home: (req, res) => {
        res.render('index', { styles: 'home' })
    },
    login: (req, res) => {
        res.render('login', { styles: 'login' })
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);
        /* res.json(errors.mapped()) */
        if (errors.isEmpty()) {
            let usuarioALoguearse
            for (let i = 0; i < usuarios.length; i++) {
                if ((usuarios[i].email == req.body.email) && (bcryptjs.compareSync(req.body.password, usuarios[i].password))) { //aca se verfica si el usuario ya existe en la DB
                    usuarioALoguearse = usuarios[i];
                    break;
                }
            }
            if (usuarioALoguearse == undefined) {
                res.render('login', { styles: 'login', errors: [{ msg: "Credenciales inválidas" }] })// esto me cuelga el server. HELP
            }
            req.session.usuarioLogueado = usuarioALoguearse
            res.redirect("/")//redirige a la home si todo esta OK, anda de 10
        } else {
            res.render('login', { styles: 'login', errors: errors.mapped() })//muestra los errores/validaciones via ejs, todo OK por aca tambien, se puede agregar un old: req.body
        }
    }
}

module.exports = mainController
