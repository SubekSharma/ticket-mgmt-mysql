const router = require("express").Router();
const ticketRoutes = require("./ticketRoutes");

router.use("/ticket", ticketRoutes);

module.exports = router;
