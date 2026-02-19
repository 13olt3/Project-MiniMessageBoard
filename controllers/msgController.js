const dbQuery = require("../db/queries");
const links = [
  { href: "/", text: "Index" },
  { href: "/newmessage", text: "New Message" },
];

async function getMessageById(req, res) {
  const { msgId } = req.params;

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }
}

async function getAllMessages(req, res) {
  const messages = await dbQuery.getAllMessages();

  res.render("index", {
    title: "Index page",
    messages: messages,
    links: links,
  });
}

async function newMessage(req, res) {
  res.render("newMessage", { title: "New Message", links: links });
}
module.exports = { getMessageById, getAllMessages, newMessage };
