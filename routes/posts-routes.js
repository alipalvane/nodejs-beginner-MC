const express = require("express");
const {getPostById, getPosts,creatPost} = require('../controllers/posts-controllers')

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/", creatPost)

module.exports = router;
