const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addNewMessage(name, message) {
  const newMessage = [name, message, new Date()];
  console.log(`New message ${newMessage}`);
  const queryText =
    "INSERT INTO messages (username, message, added) VALUES ($1, $2, $3)";
  await pool.query(queryText, newMessage);
}
module.exports = {
  getAllMessages,
  addNewMessage,
};
