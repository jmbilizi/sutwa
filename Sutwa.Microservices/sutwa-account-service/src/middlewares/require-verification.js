import { NotAuthorizedError } from "../errors/_index.js";

const requireVerification = (req, res, next) => {
  if (!req.currentUser.verified) {
    const err = new NotAuthorizedError();
    return next(err);
  }
  next();
};

export { requireVerification };
