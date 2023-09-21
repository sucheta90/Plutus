const router = require("express").Router();
const { Asset, Liabilities, User, Budget, Item } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.session.user_id);
    const itemData = await Item.findOne({
      where: { description: req.body.category },
    });
    const item = itemData.get({ plain: true });
    // console.log(`ITEM :`, item);
    const newBudgetItem = await Budget.create({
      itemId: item.id,
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
