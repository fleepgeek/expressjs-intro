const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-post", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add_post.html"));
});

router.post("/add-post", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;