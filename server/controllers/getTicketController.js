const db = require("../db");

function getTicketById() {}

function getAllTickets() {
  db.query("SELECT * FROM ticket JOIN user ON ticket.user_id = ");
}

module.exports = {
  getTicketById,
  getAllTickets,
};
