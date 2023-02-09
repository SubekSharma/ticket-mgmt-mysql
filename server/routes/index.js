const router = require('express').Router()
const bookTicketRoute = require("./bookTicketRoute")

router.use("/book", bookTicketRoute)

module.exports = router