const db = require("../../db");

async function bookTicket(req, res) {
  console.log(req.body);
  const { ticket_id, name, source, destination, airline, date, time, price } =
    req.body;

  console.log("body:", req.body);

  // add user to user table
  await addUserDetails(name, ticket_id);
  // .then((res) => console.log(res))
  // .catch((error) => console.error(error));

  // add ticket to ticket table
  db.query(
    "INSERT INTO ticket(ticket_id, date, time, source, destination, airline, price) values(?,?,?,?,?,?,?);",
    [ticket_id, date, time, source, destination, airline, price],
    (error, result) => {
      if (error) res.status(500).json({ message: error });
      res.json({ message: result });
    }
  );
}

// add user to user table
function addUserDetails(name, ticket_id) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO user(name, ticket_id) VALUES(?,?);",
      [name, ticket_id],
      (error, result) => {
        if (error) reject("Error creating user", error);
        resolve(result);
      }
    );
  });
}

module.exports = {
  bookTicket,
};
