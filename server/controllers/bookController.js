const db = require('../db')

function bookTicket(req, res) {
    console.log(req.body)
    db.query('insert into ticket(date,time,source,dest,airline,price,user_id) values(?,?,?,?,?,?,?);')
    res.send({ message: "received" })
    // res.send(req.body)
}
// 
module.exports = {
    bookTicket 
    
// }