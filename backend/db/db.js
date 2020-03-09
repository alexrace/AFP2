const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: '',
    database: '',
    host: '',
    port: '3306'
});