const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {    
    res.render('admin/add-product', {docTitle: "Add Product", path:"/add-product"});
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/products');
}
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("admin/products", { docTitle: "All Products", path:"/admin/products", prods: products, hasProduct: products.length > 0 });
    });  
}
