const router = require("express").Router();
const { User, Asset, Liabilities, Trip } = require("../models");
const { findAll } = require("../models/User");
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
    res.render("budget");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the Transaction only if Authorized user
router.get("/transaction/asset", withAuth, async (req, res) => {
  try {
    const assetData = await Asset.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const assets = assetData.map((el) => {
      return el.get({ pure: true });
    });
    res.render("incomes", { assets });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Route to get the Transaction only if Authorized user
router.get("/transaction/liabilities", withAuth, async (req, res) => {
  try {
    const allLiabilities = await Liabilities.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const liabilities = allLiabilities.map((each) => each.get({ pure: true }));

    res.render("expenses", { liabilities });
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
    const tripData = await Trip.findAll()
    const trips = tripData.map(el => el.get({pure:true}))
    res.render("tripBudget", {trips});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
