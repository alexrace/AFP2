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
    userService.registerUser(req.body, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.updateUser = (req, res) => {
    userService.updateUser(req.body, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.deleteUser = (req, res) => {
    userService.deleteUser(req.params['user_id'], (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.loginUser = (req, res) => {
    res.status(200).json({status: 200, description: "USER LOGIN"});
}

exports.logoutUser = (req, res) => {
    res.status(200).json({status: 200, description: "USER LOGOUT"});
}