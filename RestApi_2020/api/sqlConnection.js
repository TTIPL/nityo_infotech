'use strict';
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const mysql = require('mysql');

var dbConn = mysql.createConnection({
	host: config.host,
	port: config.port,
	user: config.username,
	password: config.password,
	database: config.database
 });

 // Connect to MySQL server
 dbConn.connect((err) => {
	if (err) {
	  console.log("Database Connection Failed !!!", err);
	} else {
	  console.log("connected to Database");
	}
  });

  module.exports = dbConn;