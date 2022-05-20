// Require Dependencies
const express = require("express");
const methodOverride = require("method-override");

const pokemon = require("./models/pokemon");

//Initialize Express applicaton
const app = express();

// Express Web Server Port Variable
const port = 3000;

// Mount Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Index GET/pokemon
app.get("/pokemon/", (req, res) => {
  res.render("index.ejs", { pokemon: pokemon });
});

// New GET/pokemon/new
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

// Destroy DELETE/pokemon:id
app.delete("/pokemon/:id", (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon/");
});

// Update PUT/pokemon/:id
app.put("/pokemon/:id", (req, res) => {
  pokemon[req.params.id] = req.body;
  res.redirect("/pokemon");
});

// Create POST/pokemon

// Edit GET/pokemon
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
  });
});

// Show GET/pokemon/:id
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id,
  });
});

// Port listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
