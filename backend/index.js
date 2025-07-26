// index.js
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 9000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, Vijay! Your Node + Express server is running 🚀');
});

// Sample API route
app.get('/api/notes', (req, res) => {
    res.json([
        { id: 1, title: 'First Note', content: 'This is a test note' },
        { id: 2, title: 'Second Note', content: 'Another test note' },
    ]);
});

app.get('/api/todo-list', (req, res) => {
    res.json([
        { id: 1, title: 'First Note', content: 'This is a test note' },
        { id: 2, title: 'Second Note', content: 'Another test note' },
    ]);
})
// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
