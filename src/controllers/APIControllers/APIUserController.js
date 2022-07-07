const path = require("path");
const db = require("../../database/models");

const APIUserController = {
  list: (req, res) => {
    db.Users.findAll().then((users) => {
      let respuesta = {
        meta: {
          status: 200,
          count: users.length,
        },
        users: {
          users,
          detail: "api/users/:idUsers", //cómo se resuelve?
        },
      };
      res.json(respuesta);
    });
  },

  user: (req, res) => {
    db.Users.findByPk(req.params.idUsers).then((user) => {
      let respuesta = {
        meta: {
          status: 200,
        },
        data: {
          id: user.idUsers,
          user: user.UsersNombre,
          email: user.UsersEmail,
          url: 'api/users/userImage' //falta mostrar imagen
        }
      };
      res.json(respuesta);
    });
  },
};

module.exports = APIUserController;
