const mysql = require("mysql")

const db = mysql.createConnection({
    database: "mysql_database",
    host: "localhost",
    user: "root",
    password: ""
})

module.exports = db