const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const methodOverride = require("method-override");
const session = require("express-session") 
const cookieParser = require("cookie-parser");

const routes = require(path.join(__dirname, '.', 'routes', 'routesMain.js'));
const routesUser = require(path.join(__dirname, '.', 'routes', 'routesUser.js'));
const routesProduct = require(path.join(__dirname, '.', 'routes', 'routesProduct.js'));
const userLoggedMiddleware = require("./middleware/userLoggedMiddleware");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
})) 
app.use(cookieParser());
app.use(userLoggedMiddleware);

app.use('/', routes); //mandarlo abajo de todo y los que tienen prefijo, arriba
app.use('/', routesUser);
app.use('/', routesProduct); //sumarle un /products y quitar el /products del router

app.listen(port, () => console.log("server " + port + " ok"));
