const Product = require("../models/products");


exports.getProducts = (req, res, next) => {    
    Product.fetchAll(products => {
        res.render("shop/product-list", { docTitle: "All Products", path:"/products", prods: products, hasProduct: products.length > 0 });
    });    
}
exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("shop/index", { docTitle: "Shop", path:"/", prods: products, hasProduct: products.length > 0 });
    }); 
}
exports.getOrder = (req, res, next) => {
    res.render("shop/orders", { docTitle: "Your Order", path:"/orders"});
}
exports.getCart = (req, res, next) => {
    res.render("shop/cart", { docTitle: "Your Cart", path:"/cart"});
}
exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", { docTitle: "Checkout", path:"/checkout"});
}