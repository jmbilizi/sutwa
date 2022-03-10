const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID = process.env.VERIFICATION_SID;
const client = require("twilio")(accountSid, authToken);

//Phone
exports.sendPhoneVerificationCode = (phone, verificationMethod) =>
  client.verify
    .services(serviceID)
    .verifications.create({ to: phone, channel: verificationMethod })
    .then((verification) => verification);

exports.verifyPhone = (phone, code) =>
  client.verify
    .services(serviceID)
    .verificationChecks.create({ to: phone, code })
    .then((verification_check) => verification_check);

//Email
exports.sendEmailVerificationCode = (email) =>
  client.verify
    .services(serviceID)
    .verifications.create({ to: email, channel: "email" })
    .then((verification) => console.log(verification));

exports.verifyEmail = (email, code) =>
  client.verify
    .services(serviceID)
    .verificationChecks.create({ to: email, code: code })
    .then((verification_check) => verification_check.sid);

exports.lookupPhoneNumber = (phone, countryCode) => {
  client.lookups.v1
    .phoneNumbers(phone)
    .fetch({ countryCode: countryCode })
    .then((phone_number) => phone_number);
};
