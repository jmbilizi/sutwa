const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const emailSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);