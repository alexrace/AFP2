const mysql = require('mysql');
const dbConfig = require('../db/db.config');

class productDAO{
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

    create(product, callback){
        
    }

    read(callback){
        this.connection.query("SELECT * FROM products", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    update(product, success, error){
        
    }

    delete(part, success, error){
        var sql= "DELETE FROM products WHERE id=?"
        con.query(sql,function(){
            if(error) throw error;
            else {console.log('Sikeres törlés: '+success.affectedRows);}
        })
    }
}

module.exports = new productDAO();