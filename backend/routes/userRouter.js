const express = require('express');

const router = express.Router();

router.post('/login', (req, res, next) => {
   res.status(200).json({message: "User login"});
});

router.post('/signup', (req, res, next) => {
    res.status(200).json({message: "User signup"});
});

router.get('/logout', (req, res, next) => {
    res.status(200).json({message: "User logout"});
});

router.get('/', (req, res, next) => {
    res.status(200).json({message: "User list all"});
});

router.get('/:userid', (req, res, next) => {
    res.status(200).json({message: `List user with id: ${req.params.userid}` });
});

module.exports = router;