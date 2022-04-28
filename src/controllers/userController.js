const fs = require ("fs");
const path = require ("path");
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res) =>{
        res.render('register', {styles: "register"})
    },
    create: (req, res) => {

        const errors = validationResult(req)

        if(errors.errors.length > 0){
            return res.render('register',{styles: "register", errors: errors.mapped(), old:req.body});
          } else {

              let arrayUsuarios = [...usuarios]
              let newUser = {
                  id: arrayUsuarios.length > 0 ? arrayUsuarios[arrayUsuarios.length -1].id + 1 : 1,
                  usuario: req.body.usuario,
                  email: req.body.email,
                  password: bcryptjs.hashSync(req.body.password, 12),
                  image: req.file?.filename ?? "default-user-image.png"
                  //falta categoria (que es eso?)
              }
              arrayUsuarios.push(newUser);
              fs.writeFileSync(path.join(__dirname, '../data/users.json'), (JSON.stringify(arrayUsuarios, null, 2)));
              return res.redirect('/login');
          }

    }


}

module.exports = userController
