import mongoose from "mongoose";
import crypto from "crypto";
import { v1 as uuidv1 } from "uuid";

const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      address: {
        type: String,
        lowercase: true,
        trim: true,
        required: [
          function () {
            return this.phone === null;
          },
          "Email is required if phone is not provided",
        ],
        unique: true,
      },
      verified: {
        type: Boolean,
        default: false,
      },
    },
    phone: {
      number: {
        type: String,
        trim: true,
        required: [
          function () {
            return this.email === null;
          },
          "Phone and verification method is required if Email is not provided",
        ],
        unique: true,
      },
      verificationMethod: {
        type: String,
        trim: true,
        required: [
          function () {
            return this.email === null;
          },
          "Phone and verification method is required if Email is not provided",
        ],
      },
      verified: {
        type: Boolean,
        default: false,
      },
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      lowercase: true,
      trim: true,
    },
    sutwaID: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    saltPassword: String,
    resetPasswordLink: {
      data: String,
      default: "",
    },
    role: {
      type: String,
      trim: true,
      default: "subscriber",
    },
  },
  { timestamps: true }
);

// virtual
userSchema.virtual("age").get(function () {
  const diff = new Date(Date.now() - this.dateOfBirth.getTime());
  const EPOCH = new Date(0);
  return {
    years: Math.abs(diff.getUTCFullYear() - EPOCH.getUTCFullYear()),
    months: Math.abs(diff.getUTCMonth() - EPOCH.getUTCMonth()),
    days: Math.abs(diff.getUTCDate() - EPOCH.getUTCDate()),
  };
});

userSchema.virtual("verified").get(function () {
  const verifiedEmail =
    this.email.address && this.email.verified ? true : false;
  const verifiedPhone = this.phone.number && this.phone.verified ? true : false;
  if (verifiedEmail || verifiedPhone) {
    return true;
  }
  return false;
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.saltPassword = uuidv1();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword; // true false
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.saltPassword)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

export default mongoose.model("User", userSchema);
