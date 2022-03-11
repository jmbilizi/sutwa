const express = require("express");
const router = express.Router();
const { currentUser } = require("../middlewares/current-user");

router.get("/currentuser", currentUser, (req, res) => {
  return res.status(200).json({ currentUser: req.currentUser || null });
});

module.exports = router;
