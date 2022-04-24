const fs = require ("fs");
const path = require ("path");
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));

const userController = {
    register: (req, res) =>{
        res.render('register', {styles: "register"})
    },
    create: (req, res) => {
        let arrayUsuarios = [...usuarios]
        let newUser = {
            id: arrayUsuarios.length > 0 ? arrayUsuarios[arrayUsuarios.length -1].id + 1 : 1,
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password //agregarle bcrypt
            //falta subir imagen
            //falta categoria (que es eso?)
        }
        arrayUsuarios.push(newUser);
		fs.writeFileSync(path.join(__dirname, '../data/users.json'), (JSON.stringify(arrayUsuarios, null, 2)));
		return res.redirect('/login');
    }


}

module.exports = userController
