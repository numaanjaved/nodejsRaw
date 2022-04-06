const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const express = require('express');


const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.get('/favicon.ico', (req, res) => res.status(204)); //this line is added to stop the repitition of routes.
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin",adminRoute);
app.use(shopRoute);

app.use('/', (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})


app.listen(3000);