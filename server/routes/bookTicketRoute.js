const express = require("express")
const { bookTicket } = require("../controllers/bookController")
const router = express.Router()

router.post('/', bookTicket)


module.exports = router
