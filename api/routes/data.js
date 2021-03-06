const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();

const { Posts } = require("../models");
const fastcsv = require("fast-csv");
const fs = require("fs");

// download csv
router.get("/", async (req, res) => {
  const username = req.query.user;

  try {
    const allPosts = await Posts.findAll({
      where: { username: username },
      attributes: { exclude: ["id", "username", "updatedAt"] },
    });
    const data = JSON.parse(JSON.stringify(allPosts));

    fastcsv
      .write(data, { headers: true })

      .pipe(res);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
