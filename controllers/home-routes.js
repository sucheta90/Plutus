const router = require("express").Router();

router.get("/login", async (req, res) => {
  try {
    console.log("hit  log");
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
