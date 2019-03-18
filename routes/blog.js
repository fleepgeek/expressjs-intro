const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    // console.log("In a Middleware");
    res.send("<h1>Hello World</h1>");
    // next();
});

module.exports = router;