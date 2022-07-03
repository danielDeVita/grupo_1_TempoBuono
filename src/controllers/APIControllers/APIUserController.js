const path = require("path");
const db = require("../../database/models");

const APIUserController = {
    list: (req, res) => {
        db.Users.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        count: users.length,
                    },
                    users: {
                        users,
                        detail: 'api/users/:idUsers' //cómo se resuelve?
                    },
                }
                res.json(respuesta);
            })
    },
}

module.exports = APIUserController;