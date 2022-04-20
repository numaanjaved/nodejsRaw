const express = require('express');
const { request } = require('http');
const path = require('path');
const router = express.Router();

const rootDir = require('../utils/path');
const productsController = require('../controllers/products');



router.post('/add-product', productsController.postAddProduct);
router.get('/add-product', productsController.getAddProduct);

exports.route = router;
