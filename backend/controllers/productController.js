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
    productService.createProduct(req.body, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    })
}

exports.updateProduct = (req, res) => {
    productService.updateProduct(req.body, (result) => {
       if(result.status == 200){
           return res.status(200).json(result);
       }else{
           return res.status(400).json(result);
       }
    });
}

exports.deleteProduct = (req, res) => {
    productService.deleteProduct(req.params['product_id'], (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.storeProduct = (req, res) => {
    productService.storeProduct(req.body.product_id, req.body.qty, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.sellProduct = (req, res) => {
    productService.sellProduct(req.body.product_id, req.body.qty, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    })
}