const express = require('express');
const router = express.Router();
const db = require("../model/helper");
/*
// Define route handler for GET /walks
router.get("/", async (req, res) => {
  try {
    // Execute the query using the connection
   const result= await db("SELECT * FROM walks ORDER BY id ASC") 
  res.send(result)}
   catch (err) {
    console.error('Error:', err);
    res.status(500).send(err);
  }
});

/*nt-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    setTitle('');
    setContent('');
    alert('Post created successfully');
  } catch (error) {
    console.error('Error creating post:', error);
    alert('An error occurred. Please try again.');
  }
*/

// Define route handler for POST /walks
/*router.post("/", async (req, res) => {
  console.log(req.body);
  const { volunteer, dog_name, day_of_week, time_range } = req.body;
  
  // Check if all required fields are provided
  if (!volunteer || !dog_name || !day_of_week || !time_range) {
    return res.status(400).json({ message: "Provide all required fields: volunteer, dog_id, day_of_week, time_range" });
  }
  try {   
//use dog_name to find dog_id in dogs table and store in dog_id

    // Insert the new walk into the database 
    const query =`INSERT INTO walks (volunteer, dog_id, day_of_week, time_range) VALUES ('${volunteer}', ${dog_id}, '${day_of_week}', '${time_range}');`;
    await db(query)
    // Fetch all walks from the database
    const result = await db("SELECT * FROM walks ORDER BY id ASC");
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  const walkId = req.params.id;
  try {
    // Select walk with the specified id from the database
    const walk = await db.query("SELECT * FROM walks WHERE id = ?", [walkId]);

    // If no walk is found with the specified id, return 404
    if (walk.length === 0) {
      return res.status(404).json({ message: "Walk not found" });
    }
    // Otherwise, return the walk
    res.json(walk[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
// Define route handler for GET /walks/:id to get a single walk
/*router.get("/:id", async (req, res) => {
  const walkId = req.params.id;
  try {
    // Select walk with the specified id from the database
    const walk = await db(SELECT * FROM walks WHERE id = ?, [walkId]);

    // If no walk is found with the specified id, return 404
    if (walk.length === 0) {
      return res.status(404).json({ message: "Walk not found" });
    }

    // Otherwise, return the walk
    res.json(walk[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});*/
module.exports = router;