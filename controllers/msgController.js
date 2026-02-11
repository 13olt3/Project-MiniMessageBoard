const messages = require("../data/messages");

async function getMessageById(req, res) {
  const { msgId } = req.params;

  const message = await messages.getMessageById(Number(msgId));

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.send(message);
}

module.exports = { getMessageById };
