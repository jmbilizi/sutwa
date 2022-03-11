const User = require("../models/User");
const jwt = require("jsonwebtoken");
//Phone verification
const {
  sendPhoneVerificationCode,
  sendEmailVerificationCode,
} = require("./Twilio");

const SignupController = async (req, res, next) => {
  const { name, dateOfBirth, gender, sutwaID, password } = req.body;

  const data = {
    name,
    dateOfBirth,
    gender,
    sutwaID,
    password,
  };

  if (req.body.email) {
    data.email = { address: req.body.email };
  }

  if (req.body.phone) {
    const { number, verificationMethod } = req.body.phone;
    data.phone = {
      number,
      verificationMethod,
    };
  }

  const newUser = await new User(data);

  newUser.save(async (err, user) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to save data into the database. Try signup again!",
      });
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
    req.session = { token };

    next();
  });
};

module.exports = SignupController;

// async function sutwaIdSuggestion(name) {
//   //create sutwa ID
//   const sutwaIDs = [
//     name.replace(/ /g, ""),
//     name.replace(/ /g, "."),
//     name.replace(/ /g, "-"),
//   ];
//   //Needs to be tested later for assurance
//   const isNullorUndefinedSutwaID = async (element) =>
//     User.findOne({ sutwaID: element }) === ("undefined" || null);

//   const sutwaID = await sutwaIDs.find(isNullorUndefinedSutwaID);

//   return sutwaID;
// }

// function SendVerificationCode(body) {
//   //send verification code to the phone
//   if (body && body.phone) {
//     let { number, channel } = body.phone;
//     //condition based on the status sending verification code
//     sendPhoneVerificationCode(number, channel)
//       .then((sent) => {
//         const to = sent.to;
//         if (sent.channel === "sms") {
//           return res.status(200).json({
//             message: `A verification code has been sent to the phone number ending with ${to.slice(
//               to.length - 3
//             )} via SMS, and you must use it within 10 minutes!`,
//           });
//         }
//         if (sent.channel === "call") {
//           return res.status(200).json({
//             message: `A verification code will be communicated to you using the phone number ending with ${to.slice(
//               to.length - 3
//             )} via CALL, and you must use it within 10 minutes!`,
//           });
//         }
//       })
//       .catch((error) => {
//         return res.status(300).json({
//           message: `Account created successfully, but failed to send a verification code to the phone number "${phone}", you provided!`,
//         });
//       });
//   }

//   if (body && body.email) {
//     let { email } = req.body;
//     //condition based on the status sending verification code
//     sendEmailVerificationCode(email)
//       .then((sent) => {
//         const to = sent.to;
//         return res.status(200).json({
//           message: `A verification code has been sent to your email address, ${to}. and you must use it within 10 minutes!`,
//         });
//       })
//       .catch((error) => {
//         return res.status(300).json({
//           message: `Account created successfully, but failed to send a verification code to the email address, "${email}", you provided!`,
//         });
//       });
//   }
// }
