const express = require("express")
const { deleteTicket } = require("../controllers/updateController")
const router = express.Router()

router.delete('/', deleteTicket)


module.exports = router
