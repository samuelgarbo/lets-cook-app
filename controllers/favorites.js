const express = require("express");
const router = express.Router();
const db = require("../models");

// @route   GET api/favorites
// @desc    Get all favorites
// @access  Public
router.get("/", (req, res) => {
  db.Favorite.find()
    .then((favorites) => {
      res.json(favorites);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   POST api/favorites
// @desc    Post new favorite
// @access  Public
router.post("/", async (req, res) => {
  const {
    label,
    totalTime,
    image,
    ingredientLines,
    totalNutrients,
    totalWeight,
    yield,
    user,
  } = req.body;
  //simple validation
  if (
    !label ||
    !totalTime ||
    !image ||
    !ingredientLines ||
    !totalNutrients ||
    !totalWeight ||
    !yield ||
    !user
  )
    return res.status(400).json({ error: "Please enter all fields" });

  const existingFavorite = await db.Favorite.findOne({
    label: label,
    user: user,
  });

  if (!existingFavorite) {
    db.Favorite.create({
      label,
      totalTime,
      image,
      ingredientLines,
      totalNutrients,
      totalWeight,
      yield,
      user,
    })
      .then((favorite) => {
        res.status(201).json(favorite);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    //existing favorite
    return res.status(200).json({
      message: "favorite already exists",
    });
  }
});

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

// @route   GET api/favorites/user/:userId
// @desc    Get favorites by user id
// @access  Public
router.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  db.Favorite.find({ user: userId })
    .then((favorites) => {
      res.json(favorites);
    })
    .catch((err) => {
      res.send(err);
    });
});
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

// @route   DELETE api/favorites/:favoriteId
// @desc    Remove one favorite
// @access  Public
router.delete("/recipe/:recipe", (req, res) => {
  const { recipe } = req.params;
  db.Favorite.findOneAndDelete({ label: recipe })
    .then((deletedFavorite) => {
      res.json(deletedFavorite);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
