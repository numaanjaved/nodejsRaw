const express = require("express");
const productsController = require("../controllers/products");
const adminRoute = require('./admin');
const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;