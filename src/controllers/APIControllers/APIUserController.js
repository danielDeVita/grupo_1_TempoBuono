const path = require("path");
const sequelize = require('sequelize');
const db = require("../../database/models");

const APIUserController = {
  list: (req, res) => {
    let url = req.protocol+ "://" +req.get('host') +'/api/'
    db.sequelize.query(`SELECT  *, CONCAT('${url}', idUsers) AS url_detalle From users`,{ type: db.sequelize.QueryTypes.SELECT })
    .then((resultado)=>{
      let respuesta = {
        meta: {
          status: 200,
        },
        data: {
          users: resultado,
          count: resultado.length
        },
      };
      res.json(respuesta);
    });


    // db.Users.findAndCountAll().then((users) => {
    //   let respuesta = {
    //     meta: {
    //       status: 200,
    //     },
    //     data: {
    //       detail: "api/users/:idUsers", //va la URL que lleva al perfil del usuario (hacer un map al array de objetos y sumarle el detail:)
    //       count: users.count,
    //       users: users.rows,
    //     },
    //   };
    //   res.json(respuesta);
    // });
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
