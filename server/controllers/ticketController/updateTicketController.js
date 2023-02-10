const db = require('../db')

function updateTicket(req, res) {

    db.query('update ticket set date=?, time=?, source=?, dest=?, airline=?, price=?, user_id=? where ticket_id=?;')
    res.send({ message: "received" })
    
}

module.exports = {
    updateTicket 

}