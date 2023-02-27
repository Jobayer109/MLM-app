const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  sponsorId: {
    type: String,
    required: [true, "Sponsor id is required"],
    unique: [true, "Sponsor id should be unique"],
    trim: true,
  },
  sponsorName: {
    type: String,
    required: [true, "Sponsor name is required"],
    unique: [true, "Sponsor name should be unique"],
    trim: true,
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email should be unique"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
