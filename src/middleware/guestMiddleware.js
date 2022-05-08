function guestMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next ();
    } else {
        res.send ("Página para invitados.");
    }
}

module.exports = guestMiddleware;

