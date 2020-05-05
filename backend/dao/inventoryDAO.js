const mysql = require('mysql');
const dbConfig = require('../db/db.config');

class inventoryDAO{
    constructor() {
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

    read(inventory_type, inventory_id, error, success){
        if(inventory_type == 'part'){
            this.connection.query("SELECT p.part_id, p.part_name, pi.qty, pi.availability FROM parts_inventory pi INNER JOIN parts p ON pi.part_id=p.part_id WHERE inventory_id = ?", [inventory_id], (err, result) => {
               if(err) error(err.message);
               else{
                   if(result.length > 0){
                       success(result);
                   }else{
                       error('Hibás inventory azonosító!');
                   }
               }
            });
        }
        else if(inventory_type == 'product'){
            this.connection.query("SELECT pr.product_id, pr.product_name, pi.qty, pi.availability FROM products_inventory pi INNER JOIN products pr ON pi.product_id=pr.product_id WHERE inventory_id = ?", [inventory_id], (err, result) => {
                if(err) error(err.message);
                else{
                    if(result.length > 0){
                        success(result);
                    }else{
                        error('Hibás inventory azonosító!');
                    }
                }
            });
        }
        else{
            error('Hibás inventory típus!');
        }

    }
}

module.exports = new inventoryDAO();