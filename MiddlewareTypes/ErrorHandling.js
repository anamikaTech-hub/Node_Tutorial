const express = require('express');
const app = express();

// Middleware that simulates an error
app.get('/', (req, res) => {
    throw new Error('Something went wrong!'); // Simulate an error
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.message); // Log the error
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
