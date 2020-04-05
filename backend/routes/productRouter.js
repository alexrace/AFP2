const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.fetchAll);

router.get('/:product_id', productController.fetchOne);

router.post('/create', productController.createProduct);

router.patch('/:product_id', productController.updateProduct);

router.delete('/delete/:product_id', productController.deleteProduct);

module.exports = router;