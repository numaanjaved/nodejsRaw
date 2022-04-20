const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {    
    res.render('add-product', {docTitle: "Add Product", path:"/add-product"});
}

exports.postAddProduct = (req, res, next) => {
    if(req.body.title !== undefined){
        const product = new Product(req.body.title);
        product.save();
    }
    res.redirect('/');
}
exports.getProducts = (req, res, next) => {    
    Product.fetchAll(products => {
        res.render("shop", { docTitle: "Shop", path:"/", prods: products, hasProduct: products.length > 0 });
    });    
}