const router = require("express").Router();
const userRoute = require("./userRoute");
const transactionRoute = require("./transactionRoute");
const budgetRoute = require("./budgetRoute");
const tripRoute = require("./tripRoute");

router.use("/user", userRoute);
router.use("transaction", transactionRoute);
router.use("/budget", budgetRoute);
router.use("/trip", tripRoute);

module.exports = router;
