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
        this.connection.query("SELECT inv.inventory_id FROM inventory inv INNER JOIN sites s ON inv.site_id=s.site_id WHERE s.site_name='Local worker'", {}, (err, result) => {
            if(err) error(err.message);
            else{
                let inv_id = result[0].inventory_id;

                this.connection.query("INSERT INTO parts_inventory (inventory_id, part_id, qty, availability) VALUES(?,?,?,?)",[inv_id, part_id, part_qty,'available'], (err, result) => {
                   if(err) error(err.message);
                   else{
                       success();
                   }
                });
            }
        });
    }
}

module.exports = new partDAO();