const router = require("express").Router();
const { Budget, Item, MonthYear } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const itemData = await Item.findOne({
      where: { description: req.body.category },
    });
    const monthYearData = await MonthYear.findOne({
      where: { month: req.body.month, year: req.body.year },
    });
    const monthYear = monthYearData.get({ plain: true });
    console.log("MONTHYEAR", monthYear);
    const item = itemData.get({ plain: true });
    const newBudgetItem = await Budget.create({
      itemId: item.id,
      budget_amount: req.body.amount,
      userId: req.session.user_id,
      monthYear_id: monthYear.id,
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
