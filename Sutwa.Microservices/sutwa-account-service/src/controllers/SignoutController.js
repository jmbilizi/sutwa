const SignoutController = (req, res) => {
  req.session = null;
  res.status(200).json({
    message: "You are successfully signed out!",
  });
};

export default SignoutController;
