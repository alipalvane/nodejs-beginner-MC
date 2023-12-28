const { v4: uuid } = require("uuid");

const posts = [
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
  const { title, content } = req.body;

  const createdPost = { id: uuid(), title, content };

  posts.push(createdPost);

  res.status(201).json({ post: createdPost });
};

exports.getPostById = getPostById;
exports.getPosts = getPosts;
exports.creatPost = creatPost;
