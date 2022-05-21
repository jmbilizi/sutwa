import { check } from "express-validator";
import { runValidation } from "../middlewares/runValidation.js";
import express from "express";
import SigninController from "../controllers/SigninController.js";
const router = express.Router();

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

export default router;
