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

//  ONLY AUTHORIZED USERS GETS ACCESS TO THE FOLLOWING ROUTES

// Route to get the DashBoard only if Authorized user
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

// Route to get the Budget only if Authorized user
router.get("/budget", withAuth, async (req, res) => {
  try {
    console.log("inside budget");
    res.render("budget");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the Transaction only if Authorized user
router.get("/transaction", withAuth, async (req, res) => {
  try {
    res.render("transactions");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the Emergency only if Authorized user
router.get("/emergency", withAuth, async (req, res) => {
  try {
    res.render("emergencyFunds");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the Trip only if Authorized user
router.get("/trip", withAuth, async (req, res) => {
  try {
    res.render("tripBudget");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
