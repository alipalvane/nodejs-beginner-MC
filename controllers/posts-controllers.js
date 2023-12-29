const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

let posts = [
  {
    id: "p1",
    title: "Title",
    content: "Content",
  },
];

const getPosts = (req, res, next) => {
  res.json(posts);
};

const getPostById = (req, res, next) => {
  const postId = req.params.id;

  const post = posts.find((item) => item.id === postId);

  res.json({ post });
};

const creatPost = (req, res, next) => {

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    res.status(422).json({message:'Invalid Data'})
  }

  const { title, content } = req.body;

  const createdPost = { id: uuid(), title, content };

  posts.push(createdPost);

  res.status(201).json({ post: createdPost });
};

const deletePost = (req, res, next) => {
  const postId = req.params.id;

  posts.filter((item) => item.id !== postId);

  res.status(200).json({ message: "Post deleted successfully" });
};

exports.getPostById = getPostById;
exports.getPosts = getPosts;
exports.creatPost = creatPost;
exports.deletePost = deletePost;
