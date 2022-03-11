const { NotAuthorizedError } = require("../errors/not-authorized-error");

exports.requireAuth = (req, res, next) => {
  //check if currentUser exist
  if (!req.currentUser) {
    const err = new NotAuthorizedError();
    return next(err);
  }
  next();
};
