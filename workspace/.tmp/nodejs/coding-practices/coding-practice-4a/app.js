const express = require("express");
const app = express();

const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const dbPath = path.join(__dirname, "cricketTeam.db");

app.use(express.json());

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB error ${e.message}`);
    process.exit(1);
  }
};

app.get("/players/", async (request, response) => {
  const dbQuery = `select * from cricket_team;`;
  const dbResponse = await db.all(dbQuery);
  console.log(dbResponse);
  response.send(dbResponse);
});

module.exports = app;
