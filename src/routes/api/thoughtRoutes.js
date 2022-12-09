const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

// GET all thoughts
router.route("/").get(getThoughts).post(createThought);

// GET thought by Id, PUT to Update Thought, and DELETE Thought by ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// POST Reaction to Thought ID
router.route("/:thoughtId/reactions").post(createReaction);

// DELETE Reaction from Thought by Reaction ID
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
