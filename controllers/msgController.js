const dbQuery = require("../db/queries");
const links = [
  { href: "/", text: "Index" },
  { href: "newMessage", text: "New Message" },
];

async function getMessageById(req, res) {
  const { msgId } = req.params;

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }
}

async function getAllMessages(req, res) {
  const messages = await dbQuery.getAllUsernames();

  res.render("index", {
    title: "Index page",
    messages: messages,
    links: links,
  });
}
module.exports = { getMessageById, getAllMessages };
