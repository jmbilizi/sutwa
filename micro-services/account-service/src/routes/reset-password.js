import { check } from "express-validator";
import { requireAuth, runValidation } from "../middlewares/_index.js";
import { ResetPassword } from "../controllers/Reset-password.js";

import express from "express";
const router = express.Router();

router.put(
  "/reset-password",
  requireAuth,
  [
    check("currentPassword")
      .not()
      .isEmpty()
      .withMessage("Current password can't be null")
      .isLength({ min: 6 })
      .withMessage("Current password must be at least  6 characters long"),
    check("newPassword")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("New Password must be at least  6 characters long")
      .custom((value, { req, loc, path }) => {
        if (value !== req.body.confirmNewPassword) {
          throw new Error("New password doesn't match it confirmation");
        } else {
          return value;
        }
      }),
  ],
  runValidation,
  ResetPassword
);

export default router;
