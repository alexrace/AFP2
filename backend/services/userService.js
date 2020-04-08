const userDAO = require('../dao/userDAO');

class userService{
    fetchUsers(queryOptions, callback){
        userDAO.read((users) => {
            if(queryOptions['user_id'] != undefined){
                callback(users.filter((user) => {
                    return user.user_id == queryOptions['user_id'];
                }));
            }else{
                callback(users);
            }
        });
    }

    registerUser(queryOptions, callback){
        if(queryOptions['user'] != undefined){
            userDAO.create(queryOptions['user'], () => {
                callback({"status": 200, description: "User sikeresen létrehozva!"});
            }, (err) => {
                callback({"status": 400, description: "User létrehozása sikertelen!"});
            });
        }
    }
}

module.exports = new userService();