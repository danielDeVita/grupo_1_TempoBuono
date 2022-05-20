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
const morganMiddleware = require("./middleware/loggingMorgan");

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
app.use(morganMiddleware);

app.use('/', routes);
app.use('/', routesUser);
app.use('/', routesProduct);

app.listen(port, () => console.log("server " + port + " ok"));
