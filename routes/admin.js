const express = require("express");
const path = require("path");
const postsController = require("../controllers/posts");

const router = express.Router();

const posts = [];

router.get("/add-post", postsController.getAddPost);

router.post("/add-post", postsController.postAddPost);


module.exports = {
    router,
    posts
}
