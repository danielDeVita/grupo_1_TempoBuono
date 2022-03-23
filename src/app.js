const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const rutas = require(path.join(__dirname,'.','routes','routes.js'))

app.use(express.static("public"));
app.use('/',rutas);


app.listen(port, ()=> console.log("server "+port+" ok"));

