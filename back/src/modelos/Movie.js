// describo propiedades y tipo de datos

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: String,
    rate: Number,
    poster: String,
    trailer: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;