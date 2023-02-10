const db = require('../db')

function bookTicket(req, res) {
    
    db.query('insert into ticket(date,time,source,dest,airline,price,user_id) values(?,?,?,?,?,?,?);')
    res.send({ message: "received" })
    
}

module.exports = {
    bookTicket 

} 