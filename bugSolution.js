const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).json({ error: 'Missing user data' });
  }
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields: name and email' });
  }
  db.createUser(user, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(500).json({ error: 'Failed to create user', details: err.message });
    } else {
      res.status(201).json({ message: 'User created', userId: result.insertId });
    }
  });
});