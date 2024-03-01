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
        const { title, year, director, duration, genre, rate, poster, trailer } = req.body;
        const newMovie = await moviesservice.createMovie({title, year, director, duration, genre, rate, poster, trailer});
        res.status(201).json(newMovie);
    },



    getYear: async (req, res) => {
        try {
            const year = req.query.year;
            const movieByYear = await moviesservice.getMovieByYear(year);
            if (movieByYear.length > 0) {
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
            if (movieByDirector.length > 0) {
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

    /*  getDuration: async(req, res) =>{
         try{
         const duration = req.query.duration;
         const movieByDuration = await moviesservice.getMovieByDuration(duration);
         if (movieByDuration.length === 0) {
             res.status(404).json({
                 error: "No se encontraron películas para la duración especificada."
             });
         } else {
             res.status(200).json();
         }
         } catch(error){
             res.status(500).json({
                 error: "error interno del servidor"
             });
         }
     }, */
    getGenre: async (req, res) => {
        try {
            const genre = req.query.genre;
            const moviesByGenre = await moviesservice.getMovieByGenre(genre);

            if (moviesByGenre.length > 0) {
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
            if (moviesByRate.length > 0) {
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
    }
}


/* Const getmoviesparamcontroller = (req, res) */