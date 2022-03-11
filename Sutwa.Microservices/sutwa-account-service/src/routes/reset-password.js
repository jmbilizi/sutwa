import User from "../models/User";
import jwt from "jsonwebtoken";
import { check } from "express-validator";
import { runValidation } from "../middlewares/runValidation";
import express from "express";
const router = express.Router();

router.put(
  "/reset-password",
  [
    check("newPassword")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Password must be at least  6 characters long"),
  ],
  runValidation,
  (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;

    if (resetPasswordLink) {
      jwt.verify(
        resetPasswordLink,
        process.env.JWT_RESET_PASSWORD,
        function (err, decoded) {
          if (err) {
            return res.status(400).json({
              error: "Expired link. Try again",
            });
          }

          User.findOne({ resetPasswordLink }, (err, user) => {
            if (err || !user) {
              return res.status(400).json({
                error: "Something went wrong. Try later",
              });
            }

            const updatedFields = {
              password: newPassword,
              resetPasswordLink: "",
            };

            user = _.extend(user, updatedFields);

            user.save((err, result) => {
              if (err) {
                return res.status(400).json({
                  error: "Error resetting user password",
                });
              }
              res.json({
                message: `Great! Now you can login with your new password`,
              });
            });
          });
        }
      );
    }
  }
);

export default router;
