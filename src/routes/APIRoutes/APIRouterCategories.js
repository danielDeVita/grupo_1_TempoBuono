const express = require('express');
const { builtinModules } = require('module');
const path = require('path');
const APIRouterCategories = express.Router();
const APICategoriesController = require("../../controllers/APIControllers/APICategoriesController.js")

APIRouterCategories.get("/", APICategoriesController.list);

module.exports = APIRouterCategories;