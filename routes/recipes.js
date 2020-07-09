const express = require('express');
const router = express.Router();
const db = require('../models');

// @route   GET api/recipes
// @desc    Get all recipes
// @access  Public
router.get('/', (req, res)=>{
    db.Recipe.find()
    .then(recipes=>{
        res.json(recipes);
    })
    .catch(err =>{
        res.send(err);
    })
})

// @route   POST api/recipes
// @desc    Post new recipe
// @access  Public
router.post('/', (req, res)=>{
    db.Recipe.create(req.body)
    .then(newRecipe=>{
        res.status(201).json(newRecipe)
    })
    .catch(err=>{
        res.send(err)
    })
});

// @route   GET api/recipes/:recipeId
// @desc    Get one recipe
// @access  Public
router.get('/:recipeId', (req, res)=>{
    db.Recipe.findById(req.params.recipeId)
    .then(foundRecipe => {
        res.json(foundRecipe)
    })
    .catch(err => {
        res.send(err)
    })
});

// @route   PUT api/recipes/:recipeId
// @desc    Update one recipe
// @access  Public
router.put('/:recipeId', (req, res) => {
    db.Recipe.findByIdAndUpdate(req.params.recipeId, req.body, {new: true})
    .then(updatedRecipe => {
        res.json(updatedRecipe);
    })
    .catch(err => {
        res.json(err);
    })
});

// @route   DELETE api/recipes/:recipeId
// @desc    Remove one recipe
// @access  Public
router.delete('/:recipeId', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.recipeId)
    .then(deletedRecipe => {
        res.json(deletedRecipe)
    })
    .catch(err => {
        res.send(err);
    })
})

module.exports = router;