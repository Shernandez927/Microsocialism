const { User, Thought } = require("../models");

module.exports = {
  // GET All Thoughts
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // GET single Thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "Cannot find thought with that ID! 🚫" })
          : res.status(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // POST New Thought and Add to User
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then();
  },

  // PUT request to update Thought
  updateThought(req, res) {},

  // DELETE Thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No Thought found with this ID! 🚫" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({
                message: "Thought Deleted but no User found with this ID! 🚫",
              })
          : res.json({ message: "Thought Successfully Deleted! ✅" })
      );
  },

  // POST New Reaction
  createReaction(req, res) {},

  // DELETE Reaction
  deleteReaction(req, res) {},
};
