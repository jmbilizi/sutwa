import { check } from "express-validator";
import { runValidation } from "../middlewares/runValidation";
import express from "express";
import {
  AddPhone,
  VerifyPhone,
  UpdatePhone,
  CheckPhoneStatus,
} from "../controllers/Phone";
const router = express.Router();
//create
router.post(
  "/phone",
  [
    check("authID")
      .not()
      .isEmpty()
      .withMessage("User's Authentication ID is Required!"),
    check("phone")
      .not()
      .isEmpty()
      .withMessage("Please provide your phone number!")
      .matches(
        /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{10,14}$/
      )
      .withMessage("Please provide a valid phone number!"),
    check("verificationMethod")
      .not()
      .isEmpty()
      .withMessage("Verification method is required")
      .matches(/\b(?:sms|call)\b/)
      .withMessage("Verification method must be valid"),
  ],
  runValidation,
  AddPhone
);

router.post("/phone/verify", VerifyPhone);

router.put(
  "/phone",
  [
    check("phoneId").not().isEmpty().withMessage("Phone ID is Required!"),
    check("phone")
      .not()
      .isEmpty()
      .withMessage("Please provide your new phone number!")
      .matches(
        /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{12,14}$/
      )
      .withMessage("Please provide a valid phone number!"),
    check("verificationMethod")
      .not()
      .isEmpty()
      .withMessage("Verification method is required")
      .matches(/\b(?:sms|call)\b/)
      .withMessage("Verification method must be valid, sms or call!"),
  ],
  runValidation,
  UpdatePhone
);

router.get("/phone/status/:phone", CheckPhoneStatus);

export default router;
