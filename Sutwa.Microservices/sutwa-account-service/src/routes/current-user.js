import { Router } from "express";
import { currentUser } from "../controllers/current-user.js";
import { requireAuthentication } from "../middlewares/_index.js";
const router = Router();

router.get("/currentuser", requireAuthentication, currentUser);

export default router;
