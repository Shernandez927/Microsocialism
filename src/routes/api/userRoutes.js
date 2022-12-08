const router = require("express").Router();
const {} = require("../../controllers/userControllers");

// GET All Users, POST new User, PUT to update User, and DELETE User by ID
router.route("/").get().post().put().delete();

// GET User by ID and DELETE User by ID
router.route("/:userId").get().delete();

router.route("/:userId/friends/:friendId").post().delete();

module.exports = router;
