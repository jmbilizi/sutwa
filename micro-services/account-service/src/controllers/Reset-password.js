import _ from "lodash";
import User from "../models/User.js";
import { BadRequestError, ServerError } from "../errors/_index.js";

const ResetPassword = async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;

  let currentUser = await User.findOne({ _id: req.currentUser.id });

  // verify current password
  if (!currentUser.authenticate(currentPassword)) {
    const err = new BadRequestError(
      "We could not verify your credential. Please double check and try again."
    );
    return next(err);
  }

  const updatedFields = {
    password: newPassword,
    resetPasswordLink: "",
  };

  currentUser = _.extend(currentUser, updatedFields);

  currentUser.save((error, user) => {
    if (error) {
      const serverError = new ServerError();
      return serverError;
    }
    return res.json({
      message: `Great! Now you can login with your new password`,
    });
  });
};

export { ResetPassword };
