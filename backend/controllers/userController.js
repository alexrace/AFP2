const userService = require('../services/userService');

exports.fetchAll = (req, res) => {
    userService.fetchUsers({}, (users) => {
        return res.status(200).json(users);
    });
}

exports.fetchOne = (req, res) => {
    userService.fetchUsers({user_id: req.params['user_id']}, (user) => {
        return res.status(200).json(user);
    });
}

exports.registerUser = (req, res) => {
    userService.registerUser({user: req.body}, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.loginUser = (req, res) => {

}

exports.logoutUser = (req, res) => {

}