const router = require("express").Router();
const {} = require("../../controllers/thoughtControllers");

// GET all thoughts
router.route("/").get();

// GET thought by Id
router.route("/:thoughtId").get().module.exports = router;
