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
                Console.log(result.affectedRows + " record(s) inserted");
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
                console.log(result.affectedRows + " record(s) updated");
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
                console.log('Sikeres törlés: '+result.affectedRows);
                
            }
        })
    }
}

module.exports = new partDAO();