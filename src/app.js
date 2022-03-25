const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
let mainRoutes = require(path.join(__dirname,'./routes/mainRoutes'));
let productRoutes = require(path.join(__dirname,'./routes/productRoutes'));

app.use(express.static("public"));

app.listen(port, ()=> console.log("server "+port+" ok"));

app.use('/', mainRoutes);
app.use('/', productRoutes);

// app.get("/productDetail.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "productDetail.html")));
// app.get("/productCart.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "productCart.html")));
// app.get("/register.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "register.html")));
// app.get("/login.html", (req, res)=> res.sendFile(path.join(__dirname, "views", "login.html")));