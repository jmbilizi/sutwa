import jwt from "jsonwebtoken";

const currentUser = (req, res, next) => {
  if (!req.session?.token) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.token, process.env.JWT_SECRET);
    req.currentUser = payload;
  } catch (err) {}

  next();
};

export { currentUser };
