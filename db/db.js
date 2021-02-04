const mysql = require("mysql");
var express = require("express");
const server = require("../app.js");
const db_config = require("./config.js");

var db_con = mysql.createConnection({
    host: db_config.HOST,
    port: db_config.PORT,
    user: db_config.USER,
    password: db_config.PASSWORD,
    database: db_config.DB
});

db_con.connect((err) => {
    if(!err) console.log("DB Connection succeed.");
    else console.log("DB Connection failed \n Error: " + JSON.stringify(err, undefined, 2));
});

module.exports = db_con;
