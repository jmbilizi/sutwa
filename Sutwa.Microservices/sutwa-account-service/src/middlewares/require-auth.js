import { NotAuthorizedError } from "../errors/not-authorized-error.js";

const requireAuth = (req, res, next) => {
  //check if currentUser exist
  if (!req.currentUser) {
    const err = new NotAuthorizedError();
    return next(err);
  }
  next();
};

export { requireAuth };
