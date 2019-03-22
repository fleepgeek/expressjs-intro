const Post = require("../models/post");

exports.getAddPost = (req, res, next) => {
    res.render("add_post", { pageTitle: "Add Post", path: "/admin" + req.path });
}

exports.postAddPost = (req, res, next) => {
    console.log(req.body);
    const post = new Post(req.body.title, req.body.content);
    post.save()
        .then(() => {
            res.redirect("/");
        })
        .catch(err => next(err));
}

exports.getPosts = (req, res, next) => {
    Post.getAll()
        .then((result) => {
            res.render("home", { 
                pageTitle: "Home Page", 
                allPosts: result[0],
                path: req.path 
            });
        })
        .catch(err => next(err));
}

exports.getPostById = (req, res, next) => {
    const postId = req.params.id;
    Post.getById(postId)
        .then(( [rows, fields] ) => {
            // console.log(rows[0]);
            res.render("post", {pageTitle: rows[0].title, post: rows[0]});
        })
        .catch(err => next(err));
}