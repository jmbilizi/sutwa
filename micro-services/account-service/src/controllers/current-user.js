import jwt from "jsonwebtoken";

const currentUser = (req, res) => {
  if (!req.session?.token) {
    req.currentUser = null;
    return res.status(200).json({ currentUser });
  }
  try {
    const payload = jwt.verify(req.session.token, process.env.JWT_SECRET);
    req.currentUser = payload;
    return res.status(200).json({ currentUser });
  } catch (error) {
    req.session = null;
    req.currentUser = null;
    return res.status(200).json({ currentUser });
  }
};

export { currentUser };
