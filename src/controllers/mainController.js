const fs = require("fs"); 
const path = require("path"); 
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8')); 
const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs'); 
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
        
        if (errors.isEmpty()) {
            let usuarioALoguearse
            for (let i = 0; i < usuarios.length; i++) {
                if ((usuarios[i].email == req.body.email) && (bcryptjs.compareSync(req.body.password, usuarios[i].password))) { 
                    usuarioALoguearse = usuarios[i];
                    req.session.usuarioLogueado = usuarioALoguearse
                    return res.redirect("/profile")
                }
                
            }
            if (usuarioALoguearse == undefined) {
                res.render('login', { styles: 'login', errors: [{ msg: "Credenciales inválidas" }] })
            }
            
        } else {
            res.render('login', { styles: 'login', errors: errors.mapped() })
        }
    }
}

module.exports = mainController
