const express = require('express');
const router = express.Router();
const db = require('../models');
const { populate } = require('../models/user');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res)=>{
    db.User.find()
    .then(users=>{
        res.json(users);
    })
    .catch(err =>{
        res.send(err);
    })
})

// @route   POST api/users
// @desc    Post new user
// @access  Public
router.post('/', (req, res)=>{
    db.User.create(req.body)
    .then(newUser=>{
        res.status(201).json(newUser)
    })
    .catch(err=>{
        res.send(err)
    })
});

// @route   GET api/users/:userId
// @desc    Get one user
// @access  Public
router.get('/:userId', (req, res)=>{
    db.User.findById(req.params.userId)
    .populate('recipes')
    .then(foundUser => {
        res.json(foundUser)
    })
    .catch(err => {
        res.send(err)
    })
});

// @route   PUT api/users/:userId
// @desc    Update one user
// @access  Public
router.put('/:userId', (req, res) => {
    db.User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    .then(updatedUser => {
        res.json(updatedUser);
    })
    .catch(err => {
        res.json(err);
    })
});

// @route   DELETE api/users/:userId
// @desc    Remove one user
// @access  Public
router.delete('/:userId', (req, res) => {
    db.User.findByIdAndDelete(req.params.userId)
    .then(deletedUser => {
        res.json(deletedUser)
    })
    .catch(err => {
        res.send(err);
    })
})

module.exports = router;