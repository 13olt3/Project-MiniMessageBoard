const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true })); // this is to allow the use of form data in url.body.WhateverYourVariableIs

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "Mini Messageboard",
//     links: links,
//     messages: messages,
//   });
// });

app.use("/", indexRouter);

// app.get("/newMessage", (req, res) => {
//   res.render("newMessage", { title: "Create New Message", links: links });
// });

// app.use("/newMessage", newRouter);

const PORT = 3001;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`express port ${PORT}`);
});
