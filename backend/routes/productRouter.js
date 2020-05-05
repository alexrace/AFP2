const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.fetchAll);

router.get('/:product_id', productController.fetchOne);

router.post('/', productController.createProduct);
router.post('/store', productController.storeProduct);
router.post('/sell', productController.sellProduct);

router.put('/:product_id', productController.updateProduct);

router.delete('/:product_id', productController.deleteProduct);

module.exports = router;