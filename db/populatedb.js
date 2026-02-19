const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO messages (username, message, added) 
VALUES
  ('Bryan', 'Bryan''s message!', '2025-06-06'),
  ('Odin', 'Odin''s message!', '2022-01-01'),
  ('Damon', 'Damon''s message!', '1990-12-22');
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: `${process.env.DB_URL}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
