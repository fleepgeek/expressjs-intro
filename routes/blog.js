const express = require("express");
const postController = require("../controllers/posts")
const generalController = require("../controllers/general");

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/posts/:id", postController.getPostById);
router.get("/about", generalController.getAboutUs);

module.exports = router;