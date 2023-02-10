const router = require('express').Router()
const bookTicketRoute = require("./bookTicketRoute")
const updateTicketRoute = require("./updateTicketRoute")
const deleteTicketRoute = require("./deleteTicketRoute")


router.use("/book", bookTicketRoute)
router.use("/update", updateTicketRoute)
router.use("/delete", deleteTicketRoute)


module.exports = router