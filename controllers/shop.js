const { redirect } = require("express/lib/response");
const Product = require("../models/products");


exports.getProducts = (req, res, next) => {    
    Product.fetchAll(products => {
        res.render("shop/product-list", { docTitle: "All Products", path:"/products", prods: products, hasProduct: products.length > 0 });
    });    
}
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log(product);
        res.render("shop/product-detail", { docTitle: product.title, path:"/product/"+prodId, product: product});
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
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect("/cart");
}
exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", { docTitle: "Checkout", path:"/checkout"});
}