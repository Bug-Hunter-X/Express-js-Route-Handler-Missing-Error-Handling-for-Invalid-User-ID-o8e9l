const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ...database query to fetch user based on userId...
  .then(user => {
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.send(user);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user' });
  });
});