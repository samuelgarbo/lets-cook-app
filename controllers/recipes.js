const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config/default");

// @route   GET api/recipes/:param
// @desc    Get recipes by parameter
// @access  Public
router.get("/:param", async (req, res) => {
  const { param } = req.params;
  try {
    const response = await axios.get(
      `${config.edamamAPI}&from=0&to=24&q=${param}`
    );
    return res.send(response.data);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// // @route   POST api/comments
// // @desc    Post new comment
// // @access  Public
// router.post("/", (req, res) => {
//   const { recipe, comment, user } = req.body;
//   //simple validation
//   if (!recipe || !comment || !user)
//     return res.status(400).json({ error: "Please enter all fields" });

//   db.Comment.create({
//     recipe: recipe,
//     comment: comment,
//     user: user,
//   })
//     .then((comment) => {
//       res.status(201).json(comment);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // @route   GET api/comments/:commentId
// // @desc    Get one comment by id
// // @access  Public
// router.get("/:commentId", (req, res) => {
//   const { commentId } = req.params;
//   db.Comment.findById(commentId)
//     .populate("user")
//     .then((comment) => {
//       res.json(comment);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // @route   GET api/comments/user/:userId
// // @desc    Get comments by user id
// // @access  Public
// router.get("/user/:userId", (req, res) => {
//   const { userId } = req.params;
//   db.Comment.find({ user: userId })
//     .then((comments) => {
//       res.json(comments);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// // @route   GET api/comments/recipe/:label
// // @desc    Get comments by recipe label
// // @access  Public
// router.get("/recipe/:label", (req, res) => {
//   const { label } = req.params;
//   db.Comment.find({ recipe: label })
//     .populate("user", "-password")
//     .then((comments) => {
//       res.json(comments);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// // @route   PUT api/comments/:commentId
// // @desc    Update one Comment
// // @access  Public
// router.put("/:commentId", (req, res) => {
//   const { commentId } = req.params;
//   db.Comment.findByIdAndUpdate(commentId, req.body, { new: true })
//     .then((updatedComment) => {
//       res.json(updatedComment);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// // @route   DELETE api/comments/:commentId
// // @desc    Remove one Comment
// // @access  Public
// router.delete("/:commentId", (req, res) => {
//   const { commentId } = req.params;
//   db.Comment.findByIdAndDelete(commentId)
//     .then((deletedComment) => {
//       res.json(deletedComment);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = router;
