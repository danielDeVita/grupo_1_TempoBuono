const path = require("path");
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
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
                .then(user => {
                    return res.redirect('/login');
                })
                .catch(err => console.error(err))
        }
    },
    login: (req, res) => {
        res.render('login', { styles: 'login' })
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            let usuarioALoguearse
            db.Users.findAll()//hacer un findeOne (condicion: email == email)
                .then(usuarios => {

                    for (let i = 0; i < usuarios.length; i++) {
                        if ((usuarios[i].UsersEmail == req.body.email) && (bcryptjs.compareSync(req.body.password, usuarios[i].UsersPasswd))) {
                            usuarioALoguearse = usuarios[i];
                            req.session.usuarioLogueado = usuarioALoguearse
                            if (req.body.keepLogin) {
                                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                            }
                           /*  if (req.session.usuarioLogueado.categoria == 2){
                                aca poner la logica para discriminar admin de user
                            } */
                            return res.redirect("/profile")
                        }
                    }
                    if (usuarioALoguearse == undefined) {
                        res.render('login', { styles: 'login', errors: [{ msg: "Credenciales inválidas" }] })
                    }
                })
            }
            else {
                res.render('login', { styles: 'login', errors: errors.mapped() })
            }
        },
    profile: (req, res) => {
        res.render("profile", { styles: "profile", user: req.session.usuarioLogueado });
    },
    logout: (req, res) => {

        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    },
}

module.exports = userController