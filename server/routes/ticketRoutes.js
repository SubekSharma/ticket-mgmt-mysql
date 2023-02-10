const router = require("express").Router();

const {
  bookTicket,
} = require("../controllers/ticketController/bookTicketController");
const {
  deleteTicket,
} = require("../controllers/ticketController/deleteTicketController");
const {
  updateTicket,
} = require("../controllers/ticketController/updateTicketController");
const {
  getAllTickets,
  getTicketById,
} = require("../controllers/ticketController/getTicketController");

router.post("/book", bookTicket);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicketById);

module.exports = router;
