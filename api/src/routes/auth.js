const server = require("express");
const router = server.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user) => {
    if (err) return next(err);
    if (!user) {
      res.redirect(`http://localhost:3000/login?error=401`);
    } else {
      const token = jwt.sign(user.toJSON(), "jwt-secret");
      res.redirect(`http://localhost:3000/?loginGoogle=true&t=${token}`);
    }
  })(req, res, next);
});

//Facebook
router.get("/facebook", passport.authenticate("facebook"));

router.get("/login/facebook/callback", (req, res, next) => {
  passport.authenticate("facebook", (err, user) => {
    if (err) return next(err);
    if (!user) {
      res.redirect(`http://localhost:3000/login?error=401`);
    } else {
      const token = jwt.sign(user.toJSON(), "jwt-secret");
      res.redirect(`http://localhost:3000/?loginFacebook=true&t=${token}`);
    }
  })(req, res, next);
});


module.exports = router;
