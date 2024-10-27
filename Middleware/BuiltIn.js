const express = require('express');
const app = express();


////------------EXPRESS.JSON()---------------------////

// Middleware to parse JSON data
app.use(express.json());

app.post('/data', (req, res) => {
    console.log(req.body);  // Logs the parsed JSON data
    res.send('JSON data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

////--------------EXPRESS.URLENCODED()--------------////


// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log(req.body);  // Logs the parsed form data
    res.send('Form data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


////------------EXPRESS.STATIC()---------------------/////

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
