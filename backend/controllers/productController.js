const productService = require('../services/productService');

exports.fetchAll = (req, res) => {
    productService.fetchProducts({}, (products) => {
        return res.status(200).json(products);
    });
}

exports.fetchOne = (req, res) => {
    productService.fetchProducts({product_id: req.params['product_id']}, (product) => {
        return res.status(200).json(product);
    })
}

exports.createProduct = (req, res) => {

}

exports.updateProduct = (req, res) => {

}

exports.deleteProduct = (req, res) => {
    
}