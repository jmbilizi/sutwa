const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors/bad-request-error");

const SigninController = async (req, res, next) => {
  const password = req.body.password;
  const pes = req.body.phoneOrEmailOrSutwaID;
  //check credentials
  const existingSutwaID = await User.findOne({ sutwaID: pes });
  const existingPhone = await User.findOne({ "phone.number": pes });
  const existingEmail = await User.findOne({ "email.address": pes });

  const existing = await [existingSutwaID, existingPhone, existingEmail];

  //check if every element in the array are null or undefined
  // Check if element is not undefined && not null
  const isNullOrUndefined = (element) => {
    return typeof element === "undefined" || element === null;
  };

  const err = new BadRequestError(
    "We could not verify your credentials. Please double-check and try again."
  );

  if (existing.every(isNullOrUndefined)) {
    next(err);
  }

  //find the element of the existing credential that is not null and use it to get authID
  // Check if element is not undefined && not null
  const isNotNullNorUndefined = (element) => {
    return typeof element !== "undefined" && element !== null;
  };
  const user = await existing.find(isNotNullNorUndefined);

  if (!user) {
    next(err);
  }

  // authenticate
  if (!user.authenticate(password)) {
    next(err);
  }

  // generate a token and send to client
  const token = await jwt.sign(
    { id: user._id, sutwaID: user.sutwaID, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  // Store it on session object
  req.session = await { token };

  res.status(200).json({
    message: `Welcome back ${user.name}, you are successfully signed in!`,
  });
};

module.exports = SigninController;
