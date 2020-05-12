const mysql = require('mysql');
const dbConfig = require('../db/db.config');

class partDAO{
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

    create(part, success, error){
        this.connection.query("INSERT INTO parts SET ?", part, (err, result) => {
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

    read(callback){
        this.connection.query("SELECT * FROM parts", (err, result) => {
            if(err) throw err;
            callback(result);
        })
    }

    fetchDetails(part_id, error, success){
        this.connection.query("SELECT p.part_id, p.part_name, p.part_price, p.description, inv.inventory_id, inv.location FROM parts p INNER JOIN parts_inventory pi ON p.part_id = pi.part_id INNER JOIN inventory inv ON pi.inventory_id=inv.inventory_id WHERE p.part_id = ?", [part_id], (err, result) => {
           if(err) error(err.message);
           else{
               if(result.length > 0){
                   success(result);
               }else{
                   error('A kért part nincs raktáron!');
               }
           }
        });
    }

    update(part, success, error){
        this.connection.query("UPDATE parts SET ? WHERE part_id = ?", [part, part.part_id], (err, result) => {
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

    delete(part_id, success, error){
        this.connection.query("DELETE FROM parts WHERE part_id = ?", part_id,(err,result) => {
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

    order(part_id, part_qty, success, error){
        if(part_qty <= 0){
            error('Hibás mennyiség!');
        }
        this.connection.query("SELECT inv.inventory_id FROM inventory inv INNER JOIN sites s ON inv.site_id=s.site_id WHERE s.site_name='Local worker'", {}, (err, result) => {
            if(err) error(err.message);
            else{
                if(result.length > 0){
                    let inv_id = result[0].inventory_id;

                    this.connection.query("INSERT INTO parts_inventory (inventory_id, part_id, qty, availability) VALUES(?,?,?,?)",[inv_id, part_id, part_qty,'available'], (err, result) => {
                        if(err) error(err.message);
                        else{
                            success();
                        }
                    });
                }
                else{
                    error('Nem található inventory!');
                }
            }
        });
    }

    require(part_id, part_qty, success, error){
        this.connection.query("SELECT qty FROM parts_inventory WHERE part_id = ?", [part_id], (err, result) => {
            if(err) error(err.message);
            else{
                if(result.length > 0){
                    let stock_qty = result[0].qty;
                    if(stock_qty < part_qty){
                        error('Nincs raktáron a kért mennyiség!');
                    }else{
                        this.connection.query("UPDATE parts_inventory SET qty = ? WHERE part_id = ?", [stock_qty - part_qty, part_id], (err, result) => {
                            if(err) error(err.message);
                            else{
                                success();
                            }
                        });
                    }
                }
                else{
                    error('A kért part nincs raktáron!');
                }
            }
        })
    }
}

module.exports = new partDAO();