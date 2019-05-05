const mysql = require('mysql');
const ControllerUtility= {};



/*
 This function creates a connection to team2 database with admin user
 */
ControllerUtility.createConnection = function() {
    return mysql.createConnection({
        host: "18.222.238.235",
        user: "admin",
        password: "csc648_848_02",
        database: "team2",
        port:3306
    });
}

ControllerUtility.escapeChar = function(column) {
    if(column)
        return column.replace("'", "''");
}

module.exports = ControllerUtility;