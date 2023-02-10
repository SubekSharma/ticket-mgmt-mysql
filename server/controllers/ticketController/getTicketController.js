const db = require("../../db");

function getTicketById(req, res) {
  const { id } = req.params;
  // console.log(id);
  db.query(
    "SELECT * FROM ticket JOIN user WHERE ticket.ticket_id = ?;",
    id,
    (error, result) => {
      if (error) res.status(500).json({ message: error });
      if (!result.length) res.status(404).send({ message: "Not Found!!" });
      // console.log(result[0]);
      res.send(result[0]);
    }
  );
}

function getAllTickets(req, res) {
  db.query(
    "SELECT * FROM ticket JOIN user ON ticket.ticket_id = user.ticket_id;",
    (error, result) => {
      if (error) res.status(500).json({ message: error });
      res.send(result);
    }
  );
}

module.exports = {
  getTicketById,
  getAllTickets,
};
