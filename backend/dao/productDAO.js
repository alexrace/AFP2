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

    delete(product_id, success, error){
        var sql= "DELETE FROM products WHERE product_id=?"
        this.connection.query(sql,[product_id],function(error,result){
            if(error) throw error;
            else 
            {
                console.log('Sikeres törlés: '+result.affectedRows);
            }
        })
    }
}

module.exports = new productDAO();