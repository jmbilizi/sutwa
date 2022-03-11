import express from "express";
import SignoutController from "../controllers/SignoutController.js";
const router = express.Router();

router.post("/signout", SignoutController);

export default router;
