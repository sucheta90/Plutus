const router = require("express").Router();
const { Asset, Liabilities, User, Trip } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const tripItem = await Trip.create(req.body, {
      // TODO Insert User ID somehow so it shows up as NOT null in trip table
    })
    tripItem.user_id = req.session.user_id
    if (!tripItem) {
      res.status(400).json("Something went wrong..")
      return;
    }
    res.status(200).json("Success!!")
  }
  catch (err) {
    res.status(500).json(err)
  }
});
router.put("/:id", (req, res) => {
  res.json("You have reached the put route in /trip");
});
router.delete("/:id", (req, res) => {
  res.json("You have reached the delete route in /trip");
});



router.get("/", async (req, res) => {
  try {
    const trips = await Trip.findAll({})
    if (!trips) {
      res.status(400).json("Something went wrong..")
      return;
    }
    res.status(200).json(trips)
  }
  catch (err) {
    res.status(500).json(err)
  }
});
module.exports = router;
