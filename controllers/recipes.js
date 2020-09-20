const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config/default");
const BASE_URI = "http://www.edamam.com/ontologies/edamam.owl%23";

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

// @route   GET api/recipes/:recipeId
// @desc    Get one recipe by id
// @access  Public
router.get("/recipe/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const response = await axios.get(
      `${config.edamamAPI}&r=${BASE_URI + recipeId}`
    );
    return res.send(response.data);
  } catch (e) {
    return res.status(400).send(e);
  }
});

module.exports = router;
