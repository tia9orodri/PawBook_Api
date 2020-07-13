// import dependencies and initialize express
const animalsRoutes = require('./routes/animal-route');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require("dotenv").config();

// enable parsing of http request body
app.use(bodyParser.json());
app.use(cors());
// routes and api calls
app.use('/animal', animalsRoutes);
app.use('/user', require('./routes/user-route.js'));
// start node server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`\x1b[32m(PLAIN) Server listening on port ${port}\x1b[0m.`);
});