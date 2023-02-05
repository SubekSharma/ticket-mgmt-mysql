const mysql = require("mysql")

const db = mysql.createConnection({
    database: "dbms_project",
    host: "localhost",
    user: "root",
    password: ""
})

module.exports = db