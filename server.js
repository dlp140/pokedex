// Require Dependencies
const express = require("express");

const pokemon = require("./models/pokemon");

//Initialize Express applicaton
const app = express();

// Express Web Server Port Variable
const port = 3000;

// Mount Middleware

// Index GET/pokemon
app.get("/", (req, res) => {
  res.render("index.ejs", { pokemon: pokemon });
});

// New GET/pokemon/new

// Destroy DELETE/pokemon:id

// Update PUT/pokemon/:id

// Create POST/pokemon

// Edit GET/pokemon

// Show GET/pokemon/:id
app.get("/pokemon/:indexOfPokemon", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.indexOfPokemon],
  });
});
// Port listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
