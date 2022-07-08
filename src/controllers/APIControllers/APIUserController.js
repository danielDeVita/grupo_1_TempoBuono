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
          detail: "api/users/:idUsers", //va la URL que lleva al perfil del usuario (hacer un map al array de objetos y sumarle el detail:)
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
          url: 'api/users/userImage' //falta mostrar imagen (http://localhost:3000/...+nombreImage)
        }
      };
      res.json(respuesta);
    });
  },
};

module.exports = APIUserController;
