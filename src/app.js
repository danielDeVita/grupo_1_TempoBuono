const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const routes = require(path.join(__dirname,'.','routes','routes.js'));
const routesUser = require(path.join(__dirname,'.','routes','routesUser.js'));
const routesProduct = require(path.join(__dirname,'.','routes','routesProduct.js'));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views",".src/views")


app.use('/',routes);
app.use('/',routesUser);
app.use('/',routesProduct);

app.listen(port, ()=> console.log("server "+port+" ok"));

