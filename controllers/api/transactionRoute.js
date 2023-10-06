const router = require("express").Router();
const { Asset, Liabilities, Item, MonthYear, Budget } = require("../../models");

router.post("/asset", async (req, res) => {
  try {
    const newAsset = await Asset.create({
      name: req.body.name,
      amount: req.body.amount,
      user_id: req.session.user_id,
    });
    if (!newAsset) {
      res.status(400).json(err);
      return;
    }
    res.status(200).json(newAsset);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post(
  "/liabilities",
  async (req, res, next) => {
    if (
      req.body.category &&
      req.body.amount &&
      req.body.month &&
      req.body.year
    ) {
      next();
    } else {
      res
        .status(400)
        .json({ message: "Failed to gather information. Please try again!" });
    }
  },
  async (req, res) => {
    try {
      const itemData = await Item.findOne({
        where: { description: req.body.category },
      });
      const monthYearData = await MonthYear.findOne({
        where: { month: req.body.month, year: req.body.year },
      });
      const monthYear = monthYearData.get({ plain: true });
      const item = itemData.get({ plain: true });
      const itemizedBudgetData = await Budget.findOne({
        where: {
          userId: req.session.user_id,
          monthYearId: monthYear.id,
          itemId: item.id,
        },
      });
      console.log("HERE IS THE ITEMIZED DATA", itemizedBudgetData);
      if (itemizedBudgetData) {
        console.log("INSIDE itemized BudgetADTA");
        const itemizedBudget = itemizedBudgetData.get({ plain: true });
        const newExpense = await Liabilities.create({
          itemId: item.id,
          amount: req.body.amount,
          userId: req.session.user_id,
          monthYearId: monthYear.id,
          budgetId: itemizedBudget.id,
        });
        if (!newExpense) {
          res.status(400).json(err);
          return;
        }
        res.status(200).json(newExpense);
      } else {
        // console.log("ELSE STATEMENT itemized BudgetADTA");
        const newExpense = await Liabilities.create({
          itemId: item.id,
          amount: req.body.amount,
          userId: req.session.user_id,
          monthYearId: monthYear.id,
        });
        if (!newExpense) {
          res.status(400).json(err);
          return;
        }
        res.status(200).json(newExpense);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);
router.delete("/:id", (req, res) => {
  res.json("You have reached the delete route in /transaction");
});

module.exports = router;
