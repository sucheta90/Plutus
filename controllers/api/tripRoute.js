const router = require("express").Router();
const { Asset, Liabilities, User } = require("../../models");

router.post("/", (req, res) => {
  res.json("You have reached the post route in /trip");
});
router.put("/:id", (req, res) => {
  res.json("You have reached the put route in /trip");
});
router.delete("/:id", (req, res) => {
  res.json("You have reached the delete route in /trip");
});

module.exports = router;
