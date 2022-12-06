const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {},
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
