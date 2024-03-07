const moviesservice = require("../services/moviesservice");
const catchAsync = require("../utils/utils");


const getMovies = async (req, res) => {
    const movies = await moviesservice.getAllMovies();
    res.status(200).json(movies);
    
};

const getId = async (req, res) => {
    const { id } = req.params;
    const movie = await moviesservice.getOneMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }
};

const getTitle = async (req, res) => {
    const { title } = req.body;
    const movie = await moviesservice.getMovieByTitle(title);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }
};

const createMovies = async (req, res) => {

    const { title, year, director, duration, genre, rate, poster, trailer } = req.body;
    const newMovie = await moviesservice.createMovie({ title, year, director, duration, genre, rate, poster, trailer });
    res.status(201).json(newMovie);
};

const getYear = async (req, res) => {

    const year = req.query.year;
    const movieByYear = await moviesservice.getMovieByYear(year);
    if (movieByYear) {
        res.status(200).json(movieByYear);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }

};

const getDirector = async (req, res) => {

    const director = req.query.director;
    const movieByDirector = await moviesservice.getMovieByDirector(director);
    if (movieByDirector) {
        res.status(200).json(movieByDirector);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }

};

const getDuration = async (req, res) => {

    const { duration } = req.query;
    const movie = await moviesservice.getMovieByDuration(duration);
    if (!movie) {
        return res.status(404).json({ error: 'No se encontraron películas para la duración especificada.' });
    }

    res.status(200).json(movie);

};


const getGenre = async (req, res) => {

    const genre = req.query.genre;
    const moviesByGenre = await moviesservice.getMovieByGenre(genre);

    if (moviesByGenre) {
        res.status(200).json(moviesByGenre);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }

};

const getRate = async (req, res) => {

    const rate = req.query.rate;
    const moviesByRate = await moviesservice.getMovieByRate(rate);
    if (moviesByRate) {
        res.status(200).json(moviesByRate);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }

};

const getPoster = async (req, res) => {

    const moviesWithPoster = await moviesservice.getMovieByPoster();
    res.status(200).json(moviesWithPoster);

};

const getTrailer = async (req, res) => {

    const { trailer } = req.query;
    const movieByTrailer = await moviesservice.getMovieByTrailer(trailer);
    if (movieByTrailer) {
        res.status(200).json(movieByTrailer);
    } else {
        res.status(404).json({
            message: "La búsqueda no arrojó resultados",
        });
    }

};



module.exports = {
    getMovies: catchAsync(getMovies),
    getId: catchAsync(getId),
    getTitle: catchAsync(getTitle),
    createMovies: catchAsync(createMovies),
    getYear: catchAsync(getYear),
    getDirector: catchAsync(getDirector),
    getDuration: catchAsync(getDuration),
    getGenre: catchAsync(getGenre),
    getRate: catchAsync(getRate),
    getPoster: catchAsync(getPoster),
    getTrailer: catchAsync(getTrailer)
};


