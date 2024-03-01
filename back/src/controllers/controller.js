const moviesservice = require("../services/moviesservice");


module.exports = {
    getMovies: async (req, res) => {
        try {
            /* res.status(200).send("Estamos enviando info"); */
            const movies = await moviesservice.getAllMovies();
            res.status(200).json(movies);

        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor"
            });
        }
    },

    getId: async (req, res) => {
        try {
            const { id } = req.params;
            const movie = await moviesservice.getOneMovie(id);
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }
        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor"
            });
        }
    },

    getTitle: async (req, res) => {
        try {
            const { title } = req.body;
            const movie = await moviesservice.getMovieByTitle(title);
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }

        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor"
            });
        }
    },

    createMovies: async (req, res) =>{
        try{
        const { title, year, director, duration, genre, rate, poster, trailer } = req.body;
        const newMovie = await moviesservice.createMovie({title, year, director, duration, genre, rate, poster, trailer});
        res.status(201).json(newMovie);
    } catch (error) {
        // Si hay algún error durante el proceso, maneja el error y envía una respuesta con un código de estado 500 (error interno del servidor)
        console.error('Error al crear nueva película:', error);
        res.status(500).json({
            error: 'error interno del servidor'
        });
    }},

    getYear: async (req, res) => {
        try {
            const year = req.query.year;
            const movieByYear = await moviesservice.getMovieByYear(year);
            if (movieByYear) {
                res.status(200).json(movieByYear);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }
        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor"
            });
        }
    },

    getDirector: async (req, res) => {
        try {
            const director = req.query.director;
            const movieByDirector = await moviesservice.getMovieByDirector(director);
            if (movieByDirector) {
                res.status(200).json(movieByDirector);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }
        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor"
            });
        }
    },

    getDuration: async (req, res) => {
        try {
            const duration = req.query.duration;
            const moviesByDuration = await moviesservice.getMovieByDuration(duration);
    
            if (moviesByDuration.length === 0) {
                res.status(404).json({
                    error: "No se encontraron películas para la duración especificada."
                });
            } else {
                res.status(200).json(moviesByDuration);
            }
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    },
    

    getGenre: async (req, res) => {
        try {
            const genre = req.query.genre;
            const moviesByGenre = await moviesservice.getMovieByGenre(genre);

            if (moviesByGenre) {
                res.status(200).json(moviesByGenre);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    },

    getRate: async (req, res) => {
        try {
            const rate = req.query.rate;
            const moviesByRate = await moviesservice.getMovieByRate(rate);
            if (moviesByRate) {
                res.status(200).json(moviesByRate);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    },

    getPoster: async (req, res) => {
        try {
            const moviesWithPoster = await moviesservice.getMovieByPoster();
            res.status(200).json(moviesWithPoster);
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    },
    getTrailer: async (req, res) => {
        try {
            const { trailer } = req.query;
            const movieByTrailer = await moviesservice.getMovieByTrailer(trailer);
            if (movieByTrailer) {
                res.status(200).json(movieByTrailer);
            } else {
                res.status(404).json({
                    message: "La búsqueda no arrojó resultados",
                });
            }
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    }
}

