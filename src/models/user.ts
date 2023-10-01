import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  avatar: {
    type: String,
    default: "",
  },
  theme: String,
  boards: [String],

  verified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpire: Date,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
