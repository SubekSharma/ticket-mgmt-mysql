const db = require('../db')

function deleteTicket(req, res) {
    
    db.query('delete from ticket where ticket_id=?;')
    res.send({ message: "received" })
    
}

module.exports = {
    deleteTicket 

} 