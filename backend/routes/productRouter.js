const express = require('express');

const router = express.Router();

const productService = require('../services/productService');

router.get('/', (req, res) => {
    productService.fetchProducts({}, (products) => {
        res.status(200).send(products);
    })
});

router.get('/:product_id', (req, res) => {
    productService.fetchProducts({product_id: req.params['product_id']}, (product) => {
        res.status(200).send(product);
    })
});

module.exports = router;