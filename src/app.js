const express = require("express");
const app = express();
require('dotenv').config();
const path = require("path");
const PORT = process.env.PORT
const methodOverride = require("method-override");
const session = require("express-session")
const cookieParser = require("cookie-parser");
const cors = require("cors");

const routes = require(path.join(__dirname, '.', 'routes', 'routesMain.js'));
const routesUser = require(path.join(__dirname, '.', 'routes', 'routesUser.js'));
const routesProduct = require(path.join(__dirname, '.', 'routes', 'routesProduct.js'));
const userLoggedMiddleware = require("./middleware/userLoggedMiddleware");

const APIRouterUser = require("./routes/APIRoutes/APIRouterUser");
const APIRouterProduct = require("./routes/APIRoutes/APIRouterProduct");
const APIRouterCategories = require("./routes/APIRoutes/APIRouterCategories");

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

app.use('/', routes);
app.use('/', routesUser);
app.use('/products', routesProduct);

app.use(cors());
app.use("/api/users", APIRouterUser);
app.use("/api/products", APIRouterProduct);
app.use("/api/categories", APIRouterCategories);

app.use((req, res, next) => res.status(404).render("404"));

app.listen(PORT, () => console.log(`server on port ${PORT} up`));
