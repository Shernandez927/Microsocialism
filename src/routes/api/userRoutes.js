const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userControllers");

// GET All Users, POST new User, PUT to Update User, and DELETE User by ID
router.route("/").get(getUsers).post(createUser);

// GET User by ID, PUT to Update User, and DELETE User by ID
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

//POST New Friend and DELETE Friend from User
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
