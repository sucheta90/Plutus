const router = require("express").Router();
const { Asset, Liabilities, User, Budget } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.session.user_id);
    const newBudgetItem = await Budget.create({
      category: req.body.category,
      budget_amount: req.body.amount,
      userId: req.session.user_id,
    });
    console.log(`newBudgetItem ${newBudgetItem}`);
    //newBudgetItem.setUser(req.session.user_id);
    if (!newBudgetItem) {
      res.status(400).json("Something went wrong.. Please try again.");
      return;
    }
    res.status(200).json("Success");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// router.put("/:id", (req, res) => {
//   res.json("You have reached the put route in /budget");
// });
// router.delete("/:id", (req, res) => {
//   res.json("You have reached the delete route in /budget");
// });

module.exports = router;
