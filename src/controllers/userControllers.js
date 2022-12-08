const { User, Thought } = require("../models");

module.exports = {
  // GET All Users
  getUsers(req, res) {
    User.find()
      .then(async (users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // GET User by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Cannot find user with that ID! 🚫" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // POST New User
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // DELETE User by ID and User's Thoughts
  deleteUser(req, res) {
    User.findByIdAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Cannot find user with that ID! 🚫" })
          : Thought.deleteMany({ _id: { $in: User.thoughts } })
      )
      .then(() => res.json({ message: "Deleted user and thoughts! ✅" }))
      .catch((err) => res.status(500).json(err));
  },

  // POST new friend to User
  addFriend(req, res) {
    console.log("You are adding a friend");
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Cannot find user with that ID! 🚫" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE friend from User
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friend: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Cannot find user with that ID! 🚫" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
