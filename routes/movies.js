var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
const OWM_API_KEY = process.env.OWM_API_KEY
//https://api.themoviedb.org/3/discover/movie?api_key=76667d6608654cb827cb225af78ee3b2

router.get("/", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json({ movies: data.results });
    });
});

module.exports = router;
