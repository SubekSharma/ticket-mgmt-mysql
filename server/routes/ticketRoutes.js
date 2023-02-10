const router = require("express").Router();
const { bookTicket } = require("../controllers/bookController");
const { deleteTicket } = require("../controllers/deleteController");
const { updateTicket } = require("../controllers/updateController");
const {
  getAllTickets,
  getTicketById,
} = require("../controllers/getTicketController");

router.post("/book", bookTicket);
router.patch("/update", updateTicket);
router.delete("/delete", deleteTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicketById);

module.exports = router;
