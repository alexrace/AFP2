const express = require('express');

const router = express.Router();

const partController = require('../controllers/partController');

router.get('/', partController.fetchAll);

router.get('/:part_id', partController.fetchOne);

router.post('/', partController.createPart);

router.put('/:part_id', partController.updatePart);

router.delete('/:part_id', partController.deletePart);

module.exports = router;