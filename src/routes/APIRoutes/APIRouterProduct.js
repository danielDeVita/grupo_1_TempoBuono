const express = require('express');
const path = require('path');
const APIRouterProduct = express.Router();
const APIProductController = require("../../controllers/APIControllers/APIProductController.js")

APIRouterProduct.get("/", APIProductController.list);
APIRouterProduct.get("/:idProd", APIProductController.detailProduct);

module.exports = APIRouterProduct;