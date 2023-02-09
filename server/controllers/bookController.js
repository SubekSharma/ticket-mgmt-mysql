
function bookTicket(req, res) {
    console.log(req.body)
    res.send({ message: "received" })
    // res.send(req.body)
}

module.exports = {
    bookTicket
}