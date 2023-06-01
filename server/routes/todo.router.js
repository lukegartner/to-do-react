const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// GET
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM tasks`;

  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// POST

// PUT

// DELETE

module.exports = router;
