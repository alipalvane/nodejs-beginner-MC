const express = require("express");
const { check } = require("express-validator");
const {
  getPostById,
  getPosts,
  creatPost,
  deletePost,
} = require("../controllers/posts-controllers");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post(
  "/",
  [check("title").not().isEmpty(), check("content").isLength({ min: 10 })],
  creatPost
);

router.delete("/:id", deletePost);

module.exports = router;
