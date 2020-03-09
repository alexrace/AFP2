const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message: "List all product"});
});

router.get('/:product_id', (req, res, next) => {
    res.status(200).json({message: `List info about product with ID: ${req.params.product_id}`});
});

router.post('/create', (req, res, next) => {
    res.status(200).json({message: "Create product"});
});


router.post('/sell/:product_id', (req, res, next) => {
   res.status(200).json({message: `Sell product with ID: ${req.params.product_id}`});
});

router.delete('/:product_id', (req, res, next) => {
    res.status(200).json({message: `Delete product with ID: ${req.params.product_id}`});
});

module.exports = router;