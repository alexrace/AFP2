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
}

module.exports = new userService();