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

    create(product, error, success){
        this.connection.query("INSERT INTO products SET ?", product, (err, result) => {
            if(err){
                error(err.message);
            }else{
                success();
            }
        });
    }

    read(callback){
        this.connection.query("SELECT * FROM products", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    update(product, error, success){
        this.connection.query("UPDATE products SET ? WHERE product_id = ?", [product, product.product_id], (err, result) => {
            if(err){
                error(err.message);
            }else{
                success();
            }
        })
    }

    delete(product_id, error, success){
        this.connection.query("DELETE FROM products WHERE product_id = ?", product_id,(err,result) => {
            if(err){
                error(err.message);
            }
            else {
                success();
            }
        })
    }
}

module.exports = new productDAO();