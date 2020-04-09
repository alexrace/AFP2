const mysql = require('mysql');
const dbConfig = require('../db/db.config');

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
        this.connection.query("INSERT INTO users SET ?", user, (err, result) => {
           if(err){
               return error(err);
           }else{
               return success();
           }
        });
    }

    read(callback){
        this.connection.query("SELECT * FROM users", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    update(user, success, error){
        this.connection.query("UPDATE users SET ? WHERE user_id = ?", [user, user.user_id], (err, result) => {
            if(err)
            {
                error(err.message);
            }
            else
            {
                success();
            }
        })
    }

    delete(user_id, success, error){
        var sql= "DELETE FROM users WHERE user_id=?";
        this.connection.query(sql,[user_id],function(error,result){
            if(error) throw error;
            else 
            {
                console.log('Sikeres törlés: '+result.affectedRows);
            }
        })
    }
}

module.exports = new userDAO();