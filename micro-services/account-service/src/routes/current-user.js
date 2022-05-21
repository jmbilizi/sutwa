import { Router } from "express";
import { currentUser } from "../controllers/current-user.js";
const router = Router();

router.get("/currentuser", currentUser);

export default router;
