import { check } from "express-validator";
import { runValidation } from "../middlewares/runValidation.js";
import { Router } from "express";
import {
  AddEmail,
  VerifyEmail,
  UpdateEmail,
  CheckEmailStatus,
} from "../controllers/Email";
const router = Router();
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

export default router;
