const mysql = require('mysql');
const dbConfig = require('../db/db.config');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect((error) => {
    if(error){
        throw error;
    }
    console.log('Sikeres kapcsolódás az adatbázishoz!');
});

module.exports = connection;