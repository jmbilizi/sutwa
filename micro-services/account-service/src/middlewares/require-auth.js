import { NotAuthorizedError } from "../errors/_index.js";
import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const err = new NotAuthorizedError();
  if (!req.session?.token) {
    req.currentUser = null;
    return next(err);
  }
  try {
    const payload = jwt.verify(req.session.token, process.env.JWT_SECRET);
    req.currentUser = payload;
    return next();
  } catch (error) {
    req.currentUser = null;
    return next(err);
  }
};

export { requireAuth };
