import { Router } from "express";
import { currentUser } from "../middlewares/current-user.js";
const router = Router();

router.get("/currentuser", currentUser, (req, res) => {
  return res.status(200).json({ currentUser: req.currentUser || null });
});

export default router;
