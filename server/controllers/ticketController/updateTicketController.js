const db = require("../../db");

function updateTicket(req, res) {
  const id = req.params.id;
  const { name, date, time, airline, source, destination, price } = req.body;
  console.log(req.body);
  db.query(
    "UPDATE ticket JOIN user ON ticket.ticket_id = ? && user.ticket_id = ? SET name= ? , source = ?, destination = ?, date = ?, time = ?, airline = ?, price = ?;",
    [id, id, name, source, destination, date, time, airline, price],
    (error, result) => {
      if (error) res.status(500).json({ message: "Error running query!" });
      res.send(result);
    }
  );
}

module.exports = {
  updateTicket,
};
