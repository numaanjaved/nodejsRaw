const express = require('express');
const { request } = require('http');
const path = require('path');
const router = express.Router();

const rootDir = require('../utils/path');
const shopController = require('../controllers/shop');
const adminController = require('../controllers/admin');



router.post('/add-product', adminController.postAddProduct);
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

exports.route = router;
