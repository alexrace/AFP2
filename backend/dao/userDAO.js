const mysql = require('mysql');
const dbConfig = require('../db/db.config');
const bcrypt = require('bcrypt');

class userDAO{
    constructor(){
        this.connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB
        });

        this.connection.connect((err) => {
            if(err) throw err;
        });
    }

    create(user, success, error){
        bcrypt.hash(user.password, 10, (err, hash) => {
            if(err) error(err);
            else{
                user.password = hash;
                this.connection.query("INSERT INTO users SET ?", user, (err, result) => {
                    if(err){
                        return error(err);
                    }else{
                        return success();
                    }
                });
            }
        })

    }

    read(callback){
        this.connection.query("SELECT * FROM users", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    update(user, success, error){
        this.connection.query("UPDATE users SET ? WHERE user_id = ?", [user, user.user_id], (err, result) => {
           if(err){
               error(err.message);
           } else{
               success();
           }
        });
    }

    delete(user_id, success, error){
        this.connection.query("DELETE FROM users WHERE user_id = ?", user_id,(err,result) => {
            if(err)
            {
                error(err.message);
            }
            else 
            {
                success();
            }
        });
    }

    authenticate(userdata, error, success){
        this.connection.query("SELECT u.user_id, u.username, u.email, u.password, s.site_name FROM users u INNER JOIN sites s ON u.user_site=s.site_id WHERE username = ?", [userdata.username], (err, result) => {
           if(err) error(err.message);
           else{
               if(result.length > 0){
                    bcrypt.compare(userdata.password, result[0].password, (err, hashResult) => {
                        if(err) error(err);
                        if(hashResult){
                            const user =
                                {
                                    user_id: result[0].user_id,
                                    username: result[0].username,
                                    email: result[0].email,
                                    user_site: result[0].site_name
                                };
                            success(user);
                        }else{
                            error('Sikertelen bejelentkezés!');
                        }
                    });
               }else{
                   error('Nem létező felhasználó!');
               }
           }
        });
    }
}

module.exports = new userDAO();