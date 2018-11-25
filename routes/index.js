const express = require('express');
const passport = require('passport');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/addplace", (req, res, next) => {
  res.render("add/place");
});

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/auth/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));

module.exports = router;
