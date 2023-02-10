const db = require("../db");

async function bookTicket(req, res) {
  console.log(req.body);
  const { name, source, destination, airline, date, time } = req.body;
  //add user in user table
  // get new user id
  // set new user id in ticket table

  //   get the ticket id which is going to be created
  let ticket_id;
  try {
    ticket_id = await getNewTicketId();
  } catch (error) {
    console.log(error);
  }

  // add user to user table
  addUserDetails(name, ticket_id)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));

  // find id from user table of just created user
  let user_id;
  try {
    user_id = await getUserId(name);
  } catch (error) {
    console.log(error);
  }

  db.query(
    "INSERT INTO ticket(date,time,source,dest,airline,price,user_id) values(?,?,?,?,?,?,?);",
    [date, time, source, destination, airline, price, user_id],
    (error, result) => {
      if (error) res.status(500).send({ message: error });
      res.send({ message: result });
    }
  );
}

// add user to table
function addUserDetails(name, ticket_id) {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO user(full_name, ticket_id) VALUES(?,?);",
      [name, ticket_id],
      (error, result) => {
        if (error) reject("Error creating user", error);
        resolve(result);
      }
    );
  });
}

// find user id of newly created user
function getUserId(name) {
  return new Promise((resolve, reject) =>
    db.query(
      "SELECT user_id FROM user WHERE full_name = ?;",
      name,
      (error, result) => {
        if (error) reject(error);
        if (!result.length) reject("User not found!");
        console.log(result);
        resolve(result[0].user_id);
      }
    )
  );
}

function getNewTicketId() {
  return new Promise((resolve, reject) => {
    db.query("SELECT MAX(ticket_id) FROM ticket;", (error, result) => {
      if (error) reject(error);
      resolve(result[0].ticket_id + 1);
    });
  });
}

module.exports = {
  bookTicket,
};
