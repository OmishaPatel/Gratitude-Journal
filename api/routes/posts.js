const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();

const { Posts } = require("../models");
const { validateToken } = require("../middlewares/Authmiddleware");

//CREATE POST
router.post("/", validateToken, async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Posts.findOne({ where: { id: req.params.id } });
    if (post.username === req.body.username) {
      try {
        await Posts.update(req.body, {
          where: { id: req.params.id },
        });
        const updatedPost = await Posts.findOne({
          where: { id: req.params.id },
        });
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(404).json("Post not found");
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", validateToken, async (req, res) => {
  try {
    const post = await Posts.findOne({ where: { id: req.params.id } });
    if (post.username === req.body.username) {
      try {
        await post.destroy();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findOne({ where: { id: req.params.id } });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const username = req.query.user;
  const page = req.query.page;
  const size = req.query.size;
  try {
    const allPosts = await Posts.findAndCountAll({
      where: { username: username },
      limit: size,
      offset: (page - 1) * size,
    });
    res.status(200).json({
      content: allPosts.rows,
      totalPages: Math.ceil(allPosts.count / size),
      page,
      size,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
