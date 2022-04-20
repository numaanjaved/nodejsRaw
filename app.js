const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const errorController = require("./controllers/errors.js");
const express = require('express');


const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.urlencoded({extended: true}));
app.get('/favicon.ico', (req, res) => res.status(204)); //this line is added to stop the repitition of routes.
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin",adminRoute.route);
app.use(shopRoute);

app.use('/', errorController.get404);


app.listen(3000);