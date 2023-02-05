const router = require("express").Router()
const db = require("./db")

// initial route
router.get("/", (req, res) => {
    res.send("go to /tickets for list of tickets")
})

router.get("/tickets", (req, res) => {
    db.query("SELECT * FROM ticket JOIN user ON ticket.user_id = user.user_id;", (error, result) => {
        if (error) return res.status(500).send(error)
        return res.send(result)
    })
})




module.exports = router