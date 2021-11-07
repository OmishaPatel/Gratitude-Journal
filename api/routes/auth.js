const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const { Users } = require("../models");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    try {
      const validUser = await Users.findOne({
        where: { username: req.body.username },
      });

      validUser && res.status(403).json("Username or Email already exists");
    } catch (err) {
      res.status(500).json(err);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const user = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Login
router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { username: req.body.username },
    });
    !user && res.status(400).json("Wrong email or password");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong email or passowrd");
    const accessToken = sign(
      { username: user.username, id: user.id },
      process.env.ACCESS_TOKEN
    );
    const { password, ...others } = user.dataValues;
    res.status(200).json({ others, accessToken: accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
