var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "San Tech" });
});

router.get("/profil", function (req, res) {
  res.render("profil", { nama: "Adhitya Hasan", npm: 2024240088 });
});

module.exports = router;
