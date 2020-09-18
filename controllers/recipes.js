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

// // @route   GET api/recipes/:recipeId
// // @desc    Get one recipe by id
// // @access  Public
// router.get("/:recipeId", (req, res) => {
//   const { recipeId } = req.params;
//   db.Comment.findById(recipeId)//
//     .then((recipe) => {
//       res.json(recipe);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

module.exports = router;
