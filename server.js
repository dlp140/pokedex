// Require Dependencies
const express = require("express");

const pokemon = require("./models/pokemon");

//Initialize Express applicaton
const app = express();

// Express Web Server Port Variable
const port = 3000;

// Mount Middleware

// Index GET/pokemon

// New GET/pokemon/new

// Destroy DELETE/pokemon:id

// Update PUT/pokemon/:id

// Create POST/pokemon

// Edit GET/pokemon

// Show GET/pokemon/:id

// Port listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
