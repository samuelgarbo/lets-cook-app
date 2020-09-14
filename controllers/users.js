const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/", (req, res) => {
  db.User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

// @route   POST api/users
// @desc    Post new user
// @access  Public
router.post("/", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    //simple validation
    if (!email || !firstName || !lastName || !password)
      return res.status(400).json({ error: "Please enter all fields" });

    //search if user exists
    const existentUser = await db.User.findOne({ email });

    //new user
    if (!existentUser) {
      //encrypt password
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await db.User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      return res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
    //existing user
    return res.status(200).json({
      message: "email/user already exists",
    });
  } catch (err) {
    throw Error("Error while registering new user: " + err);
  }
});

// @route   GET api/users/:userId
// @desc    Get one user by id
// @access  Public
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    let user = await db.User.findById(userId);

    //user not found
    if (!user) {
      return res.json({ message: "user not found" });
    }
    //user found
    return res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    return res.status(400).json({
      message: "user not found",
    });
  }
});

// @route   POST api/users/login
// @desc    User login
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Simple validation
    if (!email || !password) {
      return res.status(200).json({
        message: "Required field missing!",
      });
    }

    let user = await db.User.findOne({ email });

    //user not found
    if (!user) {
      return res.status(200).json({ message: "user not found" });
    }
    //check if user and password combo matches
    const passwordComparison = await bcrypt.compare(password, user.password)
    if (user && passwordComparison) {
      const userResponse = {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      };
      return res.status(200).json(userResponse);
    } else {
      return res.status(200).json({ message: "password does not match" });
    }
  } catch (error) {
    throw Error("Error while authenticating user " + error);
  }
});

// @route   PUT api/users/:userId
// @desc    Update one user
// @access  Public
router.put("/:userId", (req, res) => {
  const { userId } = req.params;
  db.User.findByIdAndUpdate(userId, req.body, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

// @route   DELETE api/users/:userId
// @desc    Remove one user
// @access  Public
router.delete("/:userId", (req, res) => {
  const { userId } = req.params;
  db.User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
