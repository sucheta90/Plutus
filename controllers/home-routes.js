const router = require("express").Router();
const { User, Asset, Liabilities, Trip, Budget } = require("../models");
const { findAll, sequelize } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login", {
      loggedIn: req.session.loggedIn,
    });
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
      include: [{ model: Budget }, { model: Asset }, { model: Liabilities }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    const budgetArr = user.budgets.map((budget) =>
      parseFloat(budget.limit_amount)
    );
    const assetArr = user.assets.map((asset) => parseFloat(asset.amount));
    const liabilitiesArr = user.liabilities.map((liability) =>
      parseFloat(liability.amount)
    );
    const budgetTotal = budgetArr.reduce((a, b) => a + b, 0);
    const assetTotal = assetArr.reduce((a, b) => a + b, 0);
    const liabilitiesTotal = liabilitiesArr.reduce((a, b) => a + b, 0);

    res.render("dashboard", {
      user: user,
      budgetTotal: budgetTotal,
      assetTotal: assetTotal,
      liabilitiesTotal: liabilitiesTotal,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get the Budget only if Authorized user
router.get("/budget", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const budgets = budgetData.map((each) => each.get({ pure: true }));
    res.render("budget", { budgets });
    // res.render("budget");
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
    const tripData = await Trip.findAll();
    const trips = tripData.map((el) => el.get({ pure: true }));
    res.render("tripBudget", { trips });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
