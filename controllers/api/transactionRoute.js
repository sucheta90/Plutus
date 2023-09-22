const router = require("express").Router();
const { Asset, Liabilities, Item } = require("../../models");

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
router.post("/liabilities", async (req, res) => {
  try {
    const itemData = await Item.findOne({
      where: { description: req.body.category },
    });
    const item = itemData.get({ plain: true });
    console.log("EXPENSE ITEM", item);
    const newExpense = await Liabilities.create({
      itemId: item.id,
      amount: req.body.amount,
      userId: req.session.user_id,
    });
    if (!newExpense) {
      res.status(400).json(err);
      return;
    }
    res.status(200).json(newExpense);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.delete("/:id", (req, res) => {
  res.json("You have reached the delete route in /transaction");
});

module.exports = router;
