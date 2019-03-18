const express = require("express");

const router = express.Router();

router.get("/add-post", (req, res, next) => {
    // console.log("In another Middleware");
    res.send(`
        <form action="/admin/add-post" method="POST">
            <label for="title">
                Title:
                <input type="text" id="title" name="title">
            </label>
            <input type="submit" value="Send" />
        </form>
    `);
});

router.post("/add-post", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
    // res.send("<h1>Successfully Created</h1>");
})

module.exports = router;