function authMiddleware (req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next ();
    } else {
        res.redirect ("/login");
    }
}

module.exports = authMiddleware;