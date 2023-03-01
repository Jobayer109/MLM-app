const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sponsorId: { type: String, unique: true },
  sponsorName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  level: { type: Number, default: 1 },
  downline: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
