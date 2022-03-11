const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const sutwaIDSchema = new Schema(
  {
    sutwaID: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SutwaID", sutwaIDSchema);
