const database = require('./db');

const User = function(user){
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.account_role = user.account_role;
};

User.create = (newUser, result) => {
    // TODO: check for existing username or email
    // TODO: if no existing record was found then insert user into the database
};

User.findById = (userID, result) => {
    // TODO: look for user in the database with given ID
};

User.getAll = (result) => {
    // TODO: fetch all user from database (username,email,account_role)
};

User.updateById = (userID, user, result) => {
    // TODO: check for existing user with the given ID
    // TODO: if user was found then update with the new data
};

User.remove = (userID, result) => {
    // TODO: check for existing user with the given ID
    // TODO: if user exists then delete it from the database
};