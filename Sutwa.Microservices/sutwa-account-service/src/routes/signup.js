const { check, oneOf } = require("express-validator");
const runValidation = require("../middlewares/runValidation");
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const SignupController = require("../controllers/SignupController");

router.post(
  "/signup",
  [
    check("name")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Name is required and must be at least  6 characters long."),
    oneOf(
      [check("phone").exists(), check("email").exists()],
      "Phone or Email is require!"
    ),
    check("phone")
      .optional()
      .not()
      .isEmpty()
      .withMessage("Phone is required!")
      .matches(
        /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{10,14}$/
      )
      .withMessage("Must be a valid phone number!")
      .custom(async (value) => {
        const existingPhone = await User.findOne({
          "phone.number": "value.number",
        });
        if (existingPhone) {
          throw new Error("Phone is taken, please sign in if it yours!");
        } else {
          return value;
        }
      }),
    check("email")
      .optional()
      .not()
      .isEmpty()
      .withMessage("Email is required!")
      .normalizeEmail()
      .isEmail()
      .withMessage("Must be a valid email!")
      .custom(async (value) => {
        const existingEmail = await User.findOne({ "email.address": value });
        if (existingEmail) {
          throw new Error("Email is taken, please sign in if it yours!");
        } else {
          return value;
        }
      }),
    // oneOf([check("channel").isIn(["sms", "call"])], "Must be valid channel"),
    check("dateOfBirth")
      .not()
      .isEmpty()
      .withMessage("Date of Birth is required!")
      .trim()
      .isDate()
      .withMessage("Must be a valid date"),
    check("gender")
      .trim()
      .isIn(["Male", "Female", "Transgender"])
      .withMessage("Must be Male, Female or Transgender"),
    check("sutwaID")
      .isLength({ min: 3 })
      .withMessage(
        "SutwaID is required and must be at least 3 characters long."
      )
      .custom(async (value) => {
        const existingSutwaID = await User.findOne({
          sutwaID: value,
        });
        if (existingSutwaID) {
          throw new Error("SutwaID is taken, please try another one.");
        } else {
          return value;
        }
      }),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required!")
      .isLength({ min: 6 })
      .withMessage("Password must be at least  6 characters long")
      .custom((value, { req, loc, path }) => {
        if (value !== req.body.confirmPassword) {
          throw new Error("Passwords don't match");
        } else {
          return value;
        }
      }),
  ],
  runValidation,
  SignupController
);

module.exports = router;
