import { NotAuthenticatedError } from "../errors/_index.js";

const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    const err = new NotAuthenticatedError();
    return next(err);
  }
  next();
};

export { requireAuth };
