const router = require("express").Router();
const { Asset, Liabilities, User } = require("../../models");

router.post("/", (req, res) => {
  res.json("You have reached the post route in /transaction");
});
router.put("/:id", (req, res) => {
  res.json("You have reached the put route in /transaction");
});
router.delete("/:id", (req, res) => {
  res.json("You have reached the delete route in /transaction");
});

module.exports = router;
