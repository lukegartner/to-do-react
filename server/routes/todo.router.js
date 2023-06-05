const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// GET
router.get("/", (req, res) => {
  const queryText = `
    SELECT * FROM tasks
    ORDER BY id;
    `;

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
router.put("/", (req, res) => {
  const taskId = req.query.id;
  const toggledTask = req.body;
  const queryText = `
    UPDATE tasks SET "complete" = $1
    WHERE "id" = $2;
  `;

  console.log(taskId);

  pool
    .query(queryText, [toggledTask.complete, taskId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
    });
});

// DELETE
router.delete("/", (req, res) => {
  const taskId = req.query.id;
  const queryText = `
    DELETE FROM tasks WHERE "id" = $1;
  `;

  pool
    .query(queryText, [taskId])
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
