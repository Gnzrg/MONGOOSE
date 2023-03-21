const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    lastname: String,
    firstname: String,
    username: { type: String, unique: true },
    gender: Number,
    email: { type: String, unique: true },
    birthDate: { type: Date, default: Date.now },
    password: String,
    favItems: [String],
  },
  { collection: "Users" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
