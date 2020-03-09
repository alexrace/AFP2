const express = require('express');

const router = express.Router();

router.get('/:part_id', (req, res, next) => {
    res.status(200).json({message: `List info about part with ID: ${req.params.part_id} `});
});

router.post('/order/:part_id', (req, res, next) => {
   res.status(200).json({message: `Order part with ID: ${req.params.part_id}`});
});

module.exports = router;