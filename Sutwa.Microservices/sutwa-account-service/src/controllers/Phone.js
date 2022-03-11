import Phone from "../models/Phone";
import { sendPhoneVerificationCode, verifyPhone } from "./Twilio";

exports.AddPhone = async (req, res) => {
  const { authID, phone, verificationMethod } = req.body;

  const existingPhone = await Phone.findOne({ phone });

  if (existingPhone) {
    return res.status(400).json({
      error: "Phone is taken!",
    });
  }

  const newPhone = await new Phone({
    authID,
    phone,
    verificationMethod,
  });

  await newPhone.save();

  await sendPhoneVerificationCode(phone, verificationMethod);

  return res.json({
    message: "A verification code has been sent to your phone!",
  });
};

exports.VerifyPhone = async (req, res) => {
  const { phone, code } = req.body;

  const existingPhone = await Phone.findOne({ phone });

  if (!existingPhone) {
    return res.status(404).json({
      error: "Phone does not exist!",
    });
  }

  const verify = await verifyPhone(phone, code);

  if (verify.status === "approved") {
    await Phone.updateOne(
      { phone },
      {
        verified: true,
      }
    );
    return res.status(200).json({
      message: "Phone successfully verified!",
    });
  }

  return res.status(400).json({
    error: "Something went wrong, please try again!",
  });
};

exports.UpdatePhone = async (req, res) => {
  const { phoneId, phone, verificationMethod } = req.body;

  const existingPhone = await Phone.findOne({ _id: phoneId });

  if (!existingPhone) {
    return res.status(400).json({
      error: "Phone does not exist, Please add it!",
    });
  }

  if (existingPhone.phone == phone) {
    return res.json({
      message: "You have already added this phone!",
    });
  }
  await Phone.updateOne(
    { _id: phoneId },
    {
      phone,
      verified: false,
      verificationMethod,
    }
  );

  await sendPhoneVerificationCode(phone, verificationMethod);

  return res.json({
    message: "A verification code has been sent to your phone!",
  });
};

exports.CheckPhoneStatus = async (req, res) => {
  const phone = req.params.phone;

  const existingPhone = await Phone.findOne({ phone });

  if (!existingPhone) {
    return res.status(202).json({
      message: "missing",
    });
  }

  if (existingPhone && existingPhone.verified == false) {
    return res.status(201).json({
      message: "unverified",
    });
  }

  if (existingPhone && existingPhone.verified == true) {
    return res.status(200).json({
      message: "verified",
    });
  }

  return res.status(400).json({
    error: "Something went wrong, please try again!",
  });
};
