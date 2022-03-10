const { check } = require("express-validator");
const runValidation = require("../middlewares/runValidation");
const express = require("express");
const router = express.Router();
const SigninController = require("../controllers/SigninController");

router.post(
  "/signin",
  [
    check("phoneOrEmailOrSutwaID")
      .not()
      .isEmpty()
      .withMessage("SutwaID, Phone or Email is required!"),
    check("password").not().isEmpty().withMessage("Password is required!"),
  ],
  runValidation,
  SigninController
);

module.exports = router;
