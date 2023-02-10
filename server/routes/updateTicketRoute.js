const express = require("express")
const { updateTicket } = require("../controllers/updateController")
const router = express.Router()

router.patch('/', updateTicket)


module.exports = router
