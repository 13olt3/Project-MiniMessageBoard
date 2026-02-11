const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const newRouter = require("./routes/indexRouter");
const { messages } = require("./data/messages");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];
const links = [
  { href: "/", text: "Index" },
  { href: "newMessage", text: "New Message" },
];
app.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: messages,
  });
});

// app.get("/newMessage", (req, res) => {
//   res.render("newMessage", { title: "Create New Message", links: links });
// });

app.use("/newMessage", newRouter);

const PORT = 3001;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`express port ${PORT}`);
});
