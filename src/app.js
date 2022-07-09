const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
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

app.listen(port, () => console.log("server " + port + " ok"));
