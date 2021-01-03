const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction,
  } = require('../../controllers/thought-controller');

  // Set up GET all and POST Thought
router
.route('/')
.get(getAllThought)
.post(addThought)

router.route('/:thoughtId')
.get(getThoughtById)
.post(addThought)
.delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);


module.exports = router;