const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.loginUser);
router.post('/signup', userController.registerUser);
router.get('/logout', userController.logoutUser);
router.get('/', userController.fetchAll);
router.get('/:user_id', userController.fetchOne);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;