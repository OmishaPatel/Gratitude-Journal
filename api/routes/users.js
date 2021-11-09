const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const { Users } = require("../models");
const { Posts } = require("../models");
const { validateToken } = require("../middlewares/Authmiddleware");
const bcrypt = require("bcrypt");

//Update User
router.put("/:id", validateToken, async (req, res) => {
  if (req.body.id === parseInt(req.params.id)) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      await Users.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });

      const updatedUser = await Users.findOne({ where: { id: req.params.id } });
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

// delete user
router.delete("/:id", validateToken, async (req, res) => {
  if (req.body.id === parseInt(req.params.id)) {
    try {
      const user = await Users.findOne({ where: { id: req.params.id } });

      await user.destroy();
      await Posts.destroy({ where: { username: req.body.username } });
      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can deleteonly your account!");
  }
});

// Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });
    const { password, ...others } = user.dataValues;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
