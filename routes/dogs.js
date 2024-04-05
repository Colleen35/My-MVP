const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require("../model/helper");

router.get("/", async (req, res) => {
    try {
      // Execute the query using the connection
     const result= await db("SELECT * FROM dogs ORDER BY id ASC") 
    res.send(result)}
     catch (err) {
      console.error('Error:', err);
      res.status(500).send(err);
    }
  });
 /* app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    
    // Insert new post into MySQL database
    const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error inserting post' });
        throw err;
      }
      res.status(201).json({ message: 'Post created successfully' });
    });
  });*/
  router.post("/", async (req, res) => {
    const { name, age, human, description, address, neighbourhood } = req.body;
    console.log(req.body, "request body");
    try {
      const result = await db(`INSERT INTO dogs (name, human, age, description, address, neighbourhood) VALUES ('${name}', '${human}', ${age}, '${description}', '${address}', '${neighbourhood}')`);
      //ogs (name, human, age, description, address, neighbourhood) VALUES (?, ?, ?, ?, ?, ?)", [name, human, age, description, address, neighbourhood]);
      console.log({result})
      res.send(result);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(err);
    }
});
// POST a new dog
/*router.post("/dogs", async (req, res) => {
    const { name, age, human, description, address, neighbourhood } = req.body;
    try {
      const result = await db.query(`INSERT INTO dogs (name, human, age, description, address, neighbourhood) VALUES ('${name}', '${human}', ${age}, '${description}', '${address}', '${neighbourhood}')`);
      res.send(result);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send(err);
    }
  });
  */
// Other route handlers for dogs...

module.exports = router;