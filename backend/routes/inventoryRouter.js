const express = require('express');

const router = express.Router();

const inventoryController = require('../controllers/inventoryController');

router.get('/:inventory_type/:inventory_id', inventoryController.fetchOne);

module.exports = router;