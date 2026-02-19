const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addNewMessage(name, message) {}
module.exports = {
  getAllMessages,
  addNewMessage,
};
