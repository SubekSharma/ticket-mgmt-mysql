const express=require("express")
const { getTicket } = require("../controllers/bookController")
const router=express.Router()

router.post('/book',getTicket)

module.exports=router
