const express = require("express");
// const http = require("http");
// body-parser parses incoming request before the request handlers
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const blogRoutes = require("./routes/blog");
const app = express();

app.set("view engine", "pug");
// no need for this since the default folder
// express looks for its views is called "views"
// app.set("views", "views"); 

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.router);
app.use(blogRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Not Found</h1>");
})

app.listen(3000, ()=> console.log("Server running on port 3000"));

// const server = http.createServer(app);
// server.listen(3000, ()=> console.log("Server running on port 3000"));