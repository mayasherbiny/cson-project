const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Mock database (in-memory storage for simplicity)
const users = [];

// Registration endpoint
app.post('/register', (req, res) => {
    const { email, username, password, fullName, gender, city, state } = req.body;

    // Check if the user already exists
    if (users.find(user => user.username === username || user.email === email)) {
        return res.json({ success: false, message: 'User already exists' });
    }

    // Save the user (in a real app, you'd save to a database)
    users.push({ email, username, password, fullName, gender, city, state });

    // Successful registration
    res.json({ success: true });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
