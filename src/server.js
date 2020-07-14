require("dotenv").config();

const db = require("./configs/sqlite");


// import dependencies and initialize express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require("path");

// Promise.all([db.connectDB()])
//   .then(() => {
//     console.log(`\x1b[32m(PLAIN) Successfuly connected to database and object storage servers\x1b[0m`);


// enable parsing of http request body
app.use(bodyParser.json());
app.use(cors());
// routes and api calls
app.use('/animal', require('./routes/animal-route.js'));
app.use('/user', require('./routes/user-route.js'));

app.use("/", express.static(path.join(__dirname, "..", "react")));
// start node server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`\x1b[32m(PLAIN) Server listening on port ${port}\x1b[0m.`);
});

