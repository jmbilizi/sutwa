import { NotAuthenticatedError } from "../errors/_index.js";
import jwt from "jsonwebtoken";

const requireAuthentication = (req, res, next) => {
  const err = new NotAuthenticatedError();
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

export { requireAuthentication };
