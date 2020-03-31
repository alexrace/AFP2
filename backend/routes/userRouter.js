const express = require('express');

const router = express.Router();

const userService = require('../services/userService');

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
    userService.fetchUsers({}, (users) => {
        res.status(200).send(users);
    });
});

router.get('/:user_id', (req, res, next) => {
    userService.fetchUsers({user_id: req.params['user_id']}, (user) => {
        res.status(200).send(user);
    });
});

module.exports = router;