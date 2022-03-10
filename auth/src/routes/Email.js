//input or body validation tools
const { check } = require("express-validator");
const runValidation = require("../middlewares/runValidation");
//Express package and Router
const express = require("express");
const router = express.Router();

const {
  AddEmail,
  VerifyEmail,
  UpdateEmail,
  CheckEmailStatus,
} = require("../controllers/Email");

//create
router.post(
  "/email",
  [
    check("authID")
      .not()
      .isEmpty()
      .withMessage("User's Authentication ID is Required!"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is Required!")
      .isEmail()
      .withMessage("Must be a valid email address!"),
  ],
  runValidation,
  AddEmail
);

//verify
router.put("/email/verify", VerifyEmail);

//update
router.put(
  "/email",
  [
    check("emailId").not().isEmpty().withMessage("Email ID is Required!"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is Required!")
      .isEmail()
      .withMessage("Must be a valid email address!"),
  ],
  runValidation,
  UpdateEmail
);

//check status
router.get("/email/status/:email", CheckEmailStatus);

module.exports = router;
