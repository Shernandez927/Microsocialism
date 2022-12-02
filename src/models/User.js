const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
