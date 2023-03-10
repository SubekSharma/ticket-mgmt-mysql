const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

db.connect((err) => {
  if (err) console.log("error connecting to db", err);
  console.log("connected to db successfully!");
});
// all routes from the rou
app.use("/api", require("./routes"));

const port = process.env.PORT || 3264;
app.listen(port, () => console.log("listening on port:", port));
