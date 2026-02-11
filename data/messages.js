const messages = [
  {
    msgId: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    msgId: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getMessageById(msgId) {
  return messages.find((message) => message.msgId === msgId);
}

module.exports = { messages, getMessageById };
