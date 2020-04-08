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

    }

    read(callback){
        this.connection.query("SELECT * FROM users", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    update(user, success, error){
        
    }

    delete(part, success, error){
        var sql= "DELETE FROM users WHERE id=?"
        con.query(sql,function(){
            if(error) throw error;
            else {console.log('Sikeres törlés: '+success.affectedRows);}
        })
    }
}

module.exports = new userDAO();