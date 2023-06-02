const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// GET
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM tasks`;

  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// POST
router.post("/", (req, res) => {
  const { title, note } = req.body;
  const queryText = `
    INSERT INTO tasks (title, note, complete)
    VALUES($1, $2, false);
    `;

  pool
    .query(queryText, [title, note])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
    });
});
// PUT

// DELETE

module.exports = router;
