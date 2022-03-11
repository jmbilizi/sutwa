const express = require("express");
const router = express.Router();
const SignoutController = require("../controllers/SignoutController");

router.post("/signout", SignoutController);

module.exports = router;
