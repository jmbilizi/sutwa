//database schema
const Email = require("../models/Email");
const User = require("../models/User");

//Email verification
const { sendEmailVerificationCode, verifyEmail } = require("./Twilio");

//add email
exports.AddEmail = async (req, res) => {
  const { email } = req.body;

  const existingEmail = await User.findOne({ "email.address": email });

  if (existingEmail) {
    return res.status(400).json({
      error: "Email is taken!",
    });
  }

  const newEmail = await new Email({ email: email.address });

  await newEmail.save();

  await sendEmailVerificationCode(email);

  return res.json({
    message: "A verification code has been sent to your email!",
  });
};

//verify email
exports.VerifyEmail = async (req, res) => {
  const { email, code } = req.body;

  const existingEmail = await User.findOne({ "email.address": email });

  if (!existingEmail) {
    return res.status(404).json({
      error: "Email does not exist!",
    });
  }

  const verify = await verifyEmail(email, code);

  if (verify.status === "approved") {
    await Email.updateOne(
      { email },
      {
        verified: true,
      }
    );
    return res.status(200).json({
      message: "Email successfully verified!",
    });
  }

  return res.status(400).json({
    error: "Something went wrong, please try again!",
  });
};

//update email
exports.UpdateEmail = async (req, res) => {
  const { emailId, email } = req.body;

  const existingEmail = await Email.findOne({ _id: emailId });

  if (!existingEmail) {
    return res.status(400).json({
      error: "Email does not exist, Please add it!",
    });
  }

  if (existingEmail.email == email) {
    return res.json({
      message: "You have already added this email!",
    });
  }
  await Email.updateOne(
    { _id: emailId },
    {
      email,
      verified: false,
    }
  );

  await sendEmailVerificationCode(email);

  return res.json({
    message: "A verification code has been sent to your email!",
  });
};

exports.CheckEmailStatus = async (req, res) => {
  const email = req.params.email;

  const existingEmail = await Email.findOne({ email });

  if (!existingEmail) {
    return res.status(202).json({
      message: "missing",
    });
  }

  if (existingEmail && existingEmail.verified == false) {
    return res.status(201).json({
      message: "unverified",
    });
  }

  if (existingEmail && existingEmail.verified == true) {
    return res.status(200).json({
      message: "verified",
    });
  }

  return res.status(400).json({
    error: "Something went wrong, please try again!",
  });
};
