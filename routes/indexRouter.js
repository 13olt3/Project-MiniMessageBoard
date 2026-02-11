const { Router } = require("express");
const newRouter = Router();
const { messages } = require("../data/messages");
const { getMessageById } = require("../controllers/msgController");

newRouter.get("/", (req, res) => {
  res.render("partials/form");
});

newRouter.post("/", (req, res) => {
  let counter = messages.length - 1;
  messages.push({
    msgId: counter + 1,
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });

  res.redirect("/");
});

newRouter.get("/:msgId", getMessageById);

module.exports = newRouter;

// const functionRouter = (messages) => {
//   const funcRouter = Router();

//   funcRouter.get("/", (req, res) => {
//     res.render("partials/form");
//   });

//   funcRouter.post("/", (req, res) => {
//     messages.push({
//       text: req.body.messageText,
//       user: req.body.authorName,
//       added: new Date(),
//     });
//     res.redirect("/");
//   });

//   return funcRouter;
// };

// module.exports = functionRouter;

//NOTE - This method turns the router into a function that takes message array from app.js to do the procesing in this file
