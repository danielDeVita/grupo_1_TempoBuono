//const fs = require("fs");
const path = require("path");
//const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
//const req = require("express/lib/request");
const db = require("../database/models")

const userController = {
    register: (req, res) => {
        res.render('register', { styles: "register" })
    },
    create: (req, res) => {

        const errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render('register', { styles: "register", errors: errors.mapped(), old: req.body });
        } else {
            db.Users.create({
                UsersNombre: req.body.usuario,
                UsersEmail: req.body.email,
                UsersPasswd: bcryptjs.hashSync(req.body.password, 12),
                UsersImageName: req.file?.filename ?? "default-user-image.png",
                usersCategory_idusersCategory: req.body.categoria
            })
            .then(user=>{
                return res.redirect('/login');
            })
            .catch(err=>console.error(err))

            /* let arrayUsuarios = [...usuarios] */

            /* let newUser = {
                id: arrayUsuarios.length > 0 ? arrayUsuarios[arrayUsuarios.length - 1].id + 1 : 1,
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                image: req.file?.filename ?? "default-user-image.png"
            } */
            /* arrayUsuarios.push(newUser); */
            /* fs.writeFileSync(path.join(__dirname, '../data/users.json'), (JSON.stringify(arrayUsuarios, null, 2))); */
        }

    },
    login: (req, res) => {
        res.render('login', { styles: 'login' })
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            let usuarioALoguearse
            //hacer un find all de db.Users
            db.Users.findAll()
            .then(usuarios=>{
                
                for (let i = 0; i < usuarios.length; i++) {
                    if ((usuarios[i].UsersEmail == req.body.email) && (bcryptjs.compareSync(req.body.password, usuarios[i].UsersPasswd))) {
                        usuarioALoguearse = usuarios[i];
                        req.session.usuarioLogueado = usuarioALoguearse
    
                        if (req.body.keepLogin) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                        }
    
                        return res.redirect("/profile")
                    }
    
                }
                if (usuarioALoguearse == undefined) {
                    res.render('login', { styles: 'login', errors: [{ msg: "Credenciales inválidas" }] })
                }
             else {
                res.render('login', { styles: 'login', errors: errors.mapped() })
            }
            })//llave y parentesis del THEN

    }},
    
    profile: (req, res) => {
        res.render("profile", { styles: "profile", user: req.session.usuarioLogueado });
    },
    logout: (req, res) => {

        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    },
    list: (req, res) => {
        db.Users.findAll()
            .then(users => {
                res.send(users)
            })
    }
}

module.exports = userController