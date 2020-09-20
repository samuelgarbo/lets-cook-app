const express = require("express");
const router = express.Router();
const db = require("../models");
const verifyToken = require("../middleware/verifyToken");

// @route   GET api/comments
// @desc    Get all comments
// @access  Private
router.get("/", verifyToken, (req, res) => {
  db.Comment.find()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   POST api/comments
// @desc    Post new comment
// @access  Private
router.post("/", verifyToken, (req, res) => {
  const { recipe, comment, user } = req.body;
  //simple validation
  if (!recipe || !comment || !user)
    return res.status(400).json({ error: "Please enter all fields" });

  db.Comment.create({
    recipe: recipe,
    comment: comment,
    user: user,
  })
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   GET api/comments/:commentId
// @desc    Get one comment by id
// @access  Public
router.get("/:commentId", (req, res) => {
  const { commentId } = req.params;
  db.Comment.findById(commentId)
    .populate("user")
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   GET api/comments/user/:userId
// @desc    Get comments by user id
// @access  Private
router.get("/user/:userId", verifyToken, (req, res) => {
  const { userId } = req.params;
  db.Comment.find({ user: userId })
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   GET api/comments/recipe/:id
// @desc    Get comments by recipe uri
// @access  Public
router.get("/recipe/:id", (req, res) => {
  const { id } = req.params;
  db.Comment.find({ recipe: id })
    .populate("user", "-password")
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   PUT api/comments/:commentId
// @desc    Update one Comment
// @access  Private
router.put("/:commentId", verifyToken, (req, res) => {
  const { commentId } = req.params;
  db.Comment.findByIdAndUpdate(commentId, req.body, { new: true })
    .then((updatedComment) => {
      res.json(updatedComment);
    })
    .catch((err) => {
      res.json(err);
    });
});

// @route   DELETE api/comments/:commentId
// @desc    Remove one Comment
// @access  Private
router.delete("/:commentId", verifyToken, (req, res) => {
  const { commentId } = req.params;
  db.Comment.findByIdAndDelete(commentId)
    .then((deletedComment) => {
      res.json(deletedComment);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
