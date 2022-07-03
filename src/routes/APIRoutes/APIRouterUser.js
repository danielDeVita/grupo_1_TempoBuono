const express = require('express');
const path = require('path');
const APIRouterUser = express.Router();
const APIUserController = require("../../controllers/APIControllers/APIUserController.js")

APIRouterUser.get("/", APIUserController.list);
//APIRouterUser.get("/:idUsers", APIUserController.user);

module.exports = APIRouterUser;