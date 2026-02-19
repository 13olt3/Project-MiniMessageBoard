const { Router } = require("express");
const msgController = require("../controllers/msgController");
const indexRouter = Router();

indexRouter.get("/", msgController.getAllMessages);
indexRouter.get("/newmessage", msgController.newMessage);
indexRouter.post("/newmessage", msgController.postNewMessage);
module.exports = indexRouter;

// newRouter.post("/", (req, res) => {
//   let counter = messages.length - 1;
//   messages.push({
//     msgId: counter + 1,
//     text: req.body.messageText,
//     user: req.body.authorName,
//     added: new Date(),
//   });

//   res.redirect("/");
// });

// indexRouter.get("/:msgId", getMessageById);

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
