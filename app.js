const express = require("express");
// const http = require("http");
// body-parser parses incoming request before the request handlers
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const adminRoutes = require("./routes/admin");
const blogRoutes = require("./routes/blog");

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes);
app.use(blogRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Not Found</h1>");
})

app.listen(3000, ()=> console.log("Server running on port 3000"));

// const server = http.createServer(app);
// server.listen(3000, ()=> console.log("Server running on port 3000"));