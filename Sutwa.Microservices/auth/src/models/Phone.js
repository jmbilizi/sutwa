const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// user schema
const phoneSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationMethod: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phone", phoneSchema);
