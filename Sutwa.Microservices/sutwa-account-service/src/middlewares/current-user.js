import jwt from "jsonwebtoken";

const currentUser = (req, res, next) => {
  //check if session or session with token exist
  if (!req.session?.token) {
    return next();
  }
  //decode the token and check if it still valid
  try {
    const payload = jwt.verify(req.session.token, process.env.JWT_SECRET);
    req.currentUser = payload;
  } catch (err) {}

  next();
};

export { currentUser };
