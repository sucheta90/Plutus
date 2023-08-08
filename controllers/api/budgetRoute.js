const router = require("express").Router();
const { Asset, Liabilities, User, Budget } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newBudgetItem = Budget.create({
      category: req.body.category,
      limit_amount: req.body.amount,
      user_id: req.body.user_id,
    });
    if (!newBudgetItem) {
      res.status(400).json("Something went wrong.. Please try again.");
      return;
    }
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", (req, res) => {
  res.json("You have reached the put route in /budget");
});
router.delete("/:id", (req, res) => {
  res.json("You have reached the delete route in /budget");
});

module.exports = router;
