const express = require('express');

const router = express.Router();

const partService = require('../services/partService');

router.get('/', (req, res) => {
    partService.fetchParts({}, (parts) => {
        res.status(200).send(parts);
    })
});

router.get('/:part_id', (req, res) => {
    partService.fetchParts({part_id: req.params['part_id']}, (part) => {
        res.status(200).send(part);
    })
});

module.exports = router;