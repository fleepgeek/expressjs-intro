const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
    // console.log("In a Middleware");
    // res.send("<h1>Hello World</h1>");
    res.sendFile(path.join(__dirname, "../", "views", "home.html"));
    // next();
});

module.exports = router;