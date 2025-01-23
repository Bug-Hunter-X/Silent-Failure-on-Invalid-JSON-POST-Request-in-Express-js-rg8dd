const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  try {
    const user = req.body;
    if (!user || Object.keys(user).length === 0) {
      return res.status(400).json({ error: 'Invalid or empty request body' });
    }
    console.log('User:', user);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(400).json({ error: 'Invalid JSON payload' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));