const db = require("../../db");

function deleteTicket(req, res) {
  const id = req.params.id;

  //   remove ticket from db
  db.query("DELETE FROM ticket WHERE ticket_id=?;", id, (error, result) => {
    if (error) res.status(500).json({ message: "Error running query!" });
    // res.send(result);
    //   remove user from db
    db.query("DELETE FROM user WHERE ticket_id = ?;", id, (error, result) => {
      if (error) res.status(500).json({ message: "Error running query!" });
      res.send(result);
    });
  });
}

module.exports = {
  deleteTicket,
};
