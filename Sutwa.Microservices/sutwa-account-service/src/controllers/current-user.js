const currentUser = (req, res) => {
  return res.status(200).json({ currentUser: req.currentUser || null });
};

export { currentUser };
