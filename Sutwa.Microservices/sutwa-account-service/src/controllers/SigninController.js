import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error.js";

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
    return next(err);
  }
  // Check if element is not undefined && not null
  const isNotNullNorUndefined = (element) => {
    return typeof element !== "undefined" && element !== null;
  };
  const user = await existing.find(isNotNullNorUndefined);

  if (!user) {
    return next(err);
  }

  // authenticate
  if (!user.authenticate(password)) {
    return next(err);
  }

  // generate a token and send to client
  const token = await jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  // Store it on session object
  req.session = await { token };

  return res.status(200).json(
    (({ name, dateOfBirth, gender, sutwaID, role }) => ({
      name,
      dateOfBirth,
      gender,
      sutwaID,
      role,
    }))(user)
  );
};

export default SigninController;
