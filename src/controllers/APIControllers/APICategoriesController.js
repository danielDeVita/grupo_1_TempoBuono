const path = require("path");
const sequelize = require('sequelize');
const db = require("../../database/models");


const APICategoriesController = {
    list: (req, res) => {
        db.productsCategory.findAll().then((categories) => {
            let respuesta = {
                meta: {
                    status: 200,
                    count: categories.length,
                },
                categories: {
                    categories,
                },
            };
            res.json(respuesta);
        });
    },
}

module.exports = APICategoriesController