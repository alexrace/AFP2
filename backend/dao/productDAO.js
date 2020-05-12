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

    store(product_id, qty, error, success){
        this.connection.query("SELECT inv.inventory_id FROM inventory inv INNER JOIN sites s ON inv.site_id=s.site_id WHERE s.site_name='Assembly line'", {}, (err, result) => {
            if(err) error(err.message);
            else{
                if(result.length > 0){
                    let inv_id = result[0].inventory_id;
                    this.connection.query("INSERT INTO products_inventory (inventory_id, product_id, qty, availability) VALUES(?,?,?,?)", [inv_id, product_id, qty,'available'], (err, result) => {
                       if(err) error(err.message);
                       else{
                           success();
                       }
                    });

                }else{
                    error('Nem található inventory!');
                }
            }
        });
    }

    sell(product_id, qty, error, success){
        this.connection.query("SELECT qty FROM products_inventory WHERE product_id = ? AND availability = ?", [product_id,'available'], (err, result) => {
           if(err) error(err.message);
           else{
               if(result.length > 0){
                   let stock_qty = result[0].qty;
                   if(qty <= 0){
                       error('Hibás mennyiség!');
                   }else{
                   if(stock_qty < qty){
                       error('Nincs raktáron a kért mennyiség!');
                        }else{
                            this.connection.query("UPDATE products_inventory SET qty = ? WHERE product_id = ?", [stock_qty-qty, product_id], (err, result) => {
                                if(err) error(err.message);
                                else{
                                    this.connection.query("SELECT product_price FROM products WHERE product_id = ?", [product_id], (err, result) => {
                                        if(err) error(err.message);
                                        else{
                                            if(result.length > 0){
                                                this.connection.query("INSERT INTO receipt (product_id, qty, total_price, created_at) VALUES(?,?,?,?)", [product_id, qty, qty*result[0].product_price, new Date()], (err, result) => {
                                                    if(err) error(err.message);
                                                    else{
                                                        success();
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    }
               }else{
                   error('A product nincs raktáron!');
               }
           }
        });
    }
}

module.exports = new productDAO();