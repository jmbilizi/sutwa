exports.currentUser = (req, res) => {
  return res.status(200).json({ currentUser: req.currentUser || null });
};
