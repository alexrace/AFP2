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
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    userService.authenticateUser({username: username, password: password}, (result) => {
        if(result.status == 200){
            return res.status(200).json(result);
        }else{
            return res.status(400).json(result);
        }
    });
}

exports.logoutUser = (req, res) => {
    res.status(200).json({status: 200, description: "USER LOGOUT"});
}