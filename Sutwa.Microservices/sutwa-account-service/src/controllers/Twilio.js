import client from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID = process.env.VERIFICATION_SID;
//Phone
const sendPhoneVerificationCode = (phone, verificationMethod) =>
  client(accountSid, authToken)
    .verify.services(serviceID)
    .verifications.create({ to: phone, channel: verificationMethod })
    .then((verification) => verification);

const verifyPhone = (phone, code) =>
  client(accountSid, authToken)
    .verify.services(serviceID)
    .verificationChecks.create({ to: phone, code })
    .then((verification_check) => verification_check);

//Email
const sendEmailVerificationCode = (email) =>
  client(accountSid, authToken)
    .verify.services(serviceID)
    .verifications.create({ to: email, channel: "email" })
    .then((verification) => console.log(verification));

const verifyEmail = (email, code) =>
  client(accountSid, authToken)
    .verify.services(serviceID)
    .verificationChecks.create({ to: email, code: code })
    .then((verification_check) => verification_check.sid);

const lookupPhoneNumber = (phone, countryCode) => {
  client(accountSid, authToken)
    .lookups.v1.phoneNumbers(phone)
    .fetch({ countryCode: countryCode })
    .then((phone_number) => phone_number);
};

export {
  sendPhoneVerificationCode,
  verifyPhone,
  sendEmailVerificationCode,
  verifyEmail,
  lookupPhoneNumber,
};
