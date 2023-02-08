const express  = require("express")
const app = express()
const db = require("./db")

const port = process.env.PORT || 3264
app.listen(port, ()=> console.log("listening on port:", port))

const BookRoutes=require("./routes/bookTicket")

app.use("/api/",BookRoutes)

db.connect((err)=>{
    if (err) console.log("error connecting to db", err)
    console.log("connected to db successfully!")

})
// all routes from the rou
app.use("/", require("./routes"))


