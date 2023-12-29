const { validationResult } = require("express-validator");
const Post = require("../models/posts");

const getPosts = async (req, res, next) => {
  const posts = await Post.find()
  res.json({posts})
};

const getPostById = async (req, res, next) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  res.json({ post });
};

const creatPost = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ message: "Invalid Data" });
  }

  const { title, content } = req.body;

  const createdPost = new Post({ title, content });

  await createdPost.save();

  res.status(201).json({ post: createdPost });
};

const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  await post.deleteOne();
  res.status(200).json({ message: "Post deleted successfully" });
};

exports.getPostById = getPostById;
exports.getPosts = getPosts;
exports.creatPost = creatPost;
exports.deletePost = deletePost;
