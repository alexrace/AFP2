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

    create(product, success, error){

    }

    read(callback){
        this.connection.query("SELECT * FROM products", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    update(product, success, error){
        
    }

    delete(product, success, error){

    }
}

module.exports = new productDAO();