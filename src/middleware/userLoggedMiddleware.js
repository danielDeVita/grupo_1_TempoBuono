const db = require("../database/models")
function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie

    db.Users.findAll()
    .then(usuarios =>{

        for (let i = 0; i < usuarios.length; i++) {
    
            if (usuarios[i].UsersEmail == emailInCookie) {
                userFromCookie = usuarios[i]
            }
        }
    
        if (userFromCookie) {
            req.session.usuarioLogueado = userFromCookie;
        }
    
        if (req.session && req.session.usuarioLogueado) {
    
            res.locals.isLogged = true;
            res.locals.usuarioLogueado = req.session.usuarioLogueado;
        }
    
        next();
    })

}

module.exports = userLoggedMiddleware;