const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const rutas = require(path.join(__dirname,'.','routes','routes.js'))

app.use(express.static("public"));
app.use('/',rutas);


app.listen(port, ()=> console.log("server "+port+" ok"));

//app.get("/", (req, res)=> res.sendFile(path.join(__dirname, "views", "index.html")));
//app.get("/productDetail.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "productDetail.html")));
//app.get("/productCart.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "productCart.html")));
//app.get("/register.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "register.html")));
//app.get("/login.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "login.html")));
