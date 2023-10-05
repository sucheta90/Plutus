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
    const item = itemData.get({ plain: true });

    const checkBudgetdata = await Budget.findOne({
      where: {
        monthYearId: monthYear.id,
        userId: req.session.user_id,
        itemId: item.id,
      },
    });
    if (checkBudgetdata) {
      const checkBudget = checkBudgetdata.get({ plain: true });
      let amount =
        parseFloat(checkBudget.budget_amount) + parseFloat(req.body.amount);
      await Budget.update(
        { budget_amount: amount },
        {
          where: {
            monthYearId: monthYear.id,
            userId: req.session.user_id,
            itemId: item.id,
          },
        }
      );
      console.log("EXSISTING BUDGET RECORD", checkBudget);
    } else {
      const newBudgetItem = await Budget.create({
        itemId: item.id,
        budget_amount: req.body.amount,
        userId: req.session.user_id,
        monthYearId: monthYear.id,
      });
      //newBudgetItem.setUser(req.session.user_id);
      if (!newBudgetItem) {
        res.status(400).json("Something went wrong.. Please try again.");
        return;
      }
    }

    res.status(200).json("Success");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
