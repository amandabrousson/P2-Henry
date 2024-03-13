// funcion que retorne un arreglo con las pelis podemos hacer peticion a la appi. el controller es el que devuelve el arreglo.
// en index.js de front tengo que cambiar la direccion de la api al locl host y ejecutar el npm run build para que actualice el front. 
//funcion de tipo async que retorne un arreglo con las peliculas que tenemos. podemos hacer peticion a la api. el controller  lo recibe y dsp se respone al cliente. luego lo cambio en index de front al await axios.get le cambio la appi por el localhost:3000/movies y correr npm build
/* import axios from 'axios';
const apiMovie= {
    apiUrl: "https://students-api.2.us-1.fl0.io/movies", */

    const Movie = require("../modelos/Movie");

    module.exports = {
    
        getAllMovies: async () => {
            const movies = await Movie.find();
            return movies;
        },
    
        getOneMovie: async (id) => {
            const movie = await Movie.findById(id);
            return movie;
        },
    
        getMovieByTitle: async (title) => {
            const movie = await Movie.findOne({ title });
            return movie;
        },
    
        getMovieByYear: async (year) => {
            const movieWithYear = await Movie.findOne({ year: parseInt(year) });
            return movieWithYear;
        },
    
        getMovieByDirector: async (director) => {
            const movieWithDirector = await Movie.findOne({ director });
            return movieWithDirector;
        },
    
        getMovieByDuration: async (duration) => {
            const movieByDuration = await Movie.findOne({ duration: duration });
            return movieByDuration;
        },
    
        getMovieByGenre: async (genre) => {
            const moviesByGenre = await Movie.findOne({ genre });
            return moviesByGenre;
        },
    
        getMovieByRate: async (rate) => {
            const rateNumber = rate;
            const moviesWithRate = await Movie.find({ rate: rate});
            return moviesWithRate;
        },
    
        getMovieByPoster: async () => {
            const moviesWithPoster = await Movie.find({ poster: { $exists: true } });;
            return moviesWithPoster;
        },
        getMovieByTrailer: async () => {
            const moviesWithTrailer = await Movie.find({ trailer: { $exists: true, $ne: '' } });
            return moviesWithTrailer;
        },
        
    
        createMovie: async (movie) => {
            const newMovie = await Movie.create(movie); 
            return newMovie;
        }
    }