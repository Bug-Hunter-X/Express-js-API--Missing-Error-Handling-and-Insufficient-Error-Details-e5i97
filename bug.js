const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if 'user' is undefined or missing properties
  db.createUser(user, (err, result) => {
    if (err) {
      // Improper error handling, should send specific error details to client
      res.status(500).send('Error creating user');
    } else {
      res.status(201).send('User created');
    }
  });
});