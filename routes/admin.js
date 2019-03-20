const express = require("express");
const path = require("path");

const router = express.Router();

const posts = [];

router.get("/add-post", (req, res, next) => {
    res.render("add_post", { pageTitle: "Add Post", path: "/admin" + req.path });
});

router.post("/add-post", (req, res, next) => {
    console.log(req.body);
    posts.push({ title: req.body.title })
    res.redirect("/");
})


// exports.router = router;
// exports.posts = posts;
module.exports = {
    router,
    posts
}
// module.exports = router;