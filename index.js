// Require necessary modules and files
require('./config/connect'); // Assuming this file connects to the database
const express = require('express');
const app = express();
const port = 2400;
const cors = require('cors');
const userRoute = require('./route/route');

// Middleware and route configurations
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use('/user', userRoute); // Mount the user route handler
app.get('/', (req, res) => res.send('Hello World!')); // Default route

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
