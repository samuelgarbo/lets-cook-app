const express = require("express");
const router = express.Router();
const db = require("../models");
const verifyToken = require("../middleware/verifyToken");
const BASE_URI = "http://www.edamam.com/ontologies/edamam.owl#";

// @route   GET api/favorites
// @desc    Get all favorites
// @access  Private
router.get("/", verifyToken, (req, res) => {
  db.Favorite.find()
    .then((favorites) => {
      res.json(favorites);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   POST api/favorites
// @desc    Add new favorite
// @access  Private
router.post("/", verifyToken, async (req, res) => {
  const {
    label,
    uri,
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
    !totalTime < 0 ||
    !image ||
    !ingredientLines ||
    !totalNutrients ||
    !totalWeight ||
    !yield ||
    !user ||
    !uri
  ) {
    return res.status(200).json({ error: "Please enter all fields" });
  }

  const existingFavorite = await db.Favorite.findOne({
    uri: uri,
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
      uri,
    })
      .then((favorite) => {
        res.status(201).json(favorite);
      })
      .catch((err) => {
        console.log("error");
        res.send(err);
      });
  } else {
    //existing favorite
    return res.status(200).json({
      message: "favorite already exists",
    });
  }
});

// // @route   GET api/favorites/:favoriteId
// // @desc    Get one favorite by id
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
// @access  Private
router.get("/user/:userId", verifyToken, (req, res) => {
  const { userId } = req.params;
  db.Favorite.find({ user: userId })
    .then((favorites) => {
      res.json(favorites);
    })
    .catch((err) => {
      res.send(err);
    });
});
// // @route   GET api/favorites/recipe/:label
// // @desc    Get favorites by recipe label
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

// // @route   PUT api/favorites/:favoriteId
// // @desc    Update one favorite
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
// @desc    Remove one favorite by uri
// @access  Private
router.delete("/recipe/:recipe", verifyToken, (req, res) => {
  const { recipe } = req.params;
  console.log(BASE_URI + recipe);
  db.Favorite.findOneAndDelete({ uri: BASE_URI + recipe })
    .then((deletedFavorite) => {
      res.json(deletedFavorite);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
