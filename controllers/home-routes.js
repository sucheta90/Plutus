const router = require("express").Router();
const { User, Asset, Liabilities, Trip } = require("../models");
const withAuth = require("../utils/auth");

router.get("/login", async (req, res) => {
  try {
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates new user
router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the DashBoard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });
    const user = userData.get({ plain: true });

    res.render("dashboard", { ...user });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
