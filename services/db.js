const mysql = require('mysql');

const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "D@niel18011998",
    database: "tv_new_full_DB"
});

module.exports.connection =  connection;
