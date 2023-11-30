const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  course: {
    type: String,
    enum: ["Engineering", "BTech", "Bachelor of Technology"],
    required: true,
    role: {
      type: String,
      enum: ["Student", "HR"],
      default: "Student",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
