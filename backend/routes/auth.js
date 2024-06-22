const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google OAuth
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard'); // Redirect to the frontend dashboard or another route after login
  }
);

// LinkedIn OAuth
router.get('/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile']
}));

router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard'); // Redirect to the frontend dashboard or another route after login
  }
);

module.exports = router;
