// funcion que retorne un arreglo con las pelis podemos hacer peticion a la appi. el controller es el que devuelve el arreglo.
// en index.js de front tengo que cambiar la direccion de la api al locl host y ejecutar el npm run build para que actualice el front. 
//funcion de tipo async que retorne un arreglo con las peliculas que tenemos. podemos hacer peticion a la api. el controller  lo recibe y dsp se respone al cliente. luego lo cambio en index de front al await axios.get le cambio la appi por el localhost:3000/movies y correr npm build
/* import axios from 'axios';
const apiMovie= {
    apiUrl: "https://students-api.2.us-1.fl0.io/movies", */

const movielist = [
    {
        title: "Guardians of the Galaxy Vol. 2",
        year: 2017,
        director: "James Gunn",
        duration: "2h 16min",
        genre: ["Action", "Adventure", "Comedy"],
        rate: 7.7,
        poster:
            "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
        director: "George Lucas",
        duration: "2h 1min",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        rate: 8.7,
        poster:
            "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        director: "Peter Jackson",
        duration: "2h 58min",
        genre: ["Action", "Adventure", "Drama", "Fantasy"],
        rate: 8.8,
        poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
];



module.exports = {

    getAllMovies: async () => {
        return movielist;
    },

    getMovieByTitle: async (title) => {
        const moviesWithTitle = movielist.filter(element => element.title === title);
        return moviesWithTitle;
    },
    getMovieByYear: async (year) => {
        const movieWithYear = movielist.filter(element => element.year === parseInt(year));
        return movieWithYear;
    },
    getMovieByDirector: async (director) => {
        const movieWithDirector = movielist.filter(element => element.director === director);
        return movieWithDirector;
    },
    /* getMovieByDuration: async(duration) =>{
        const movieWithDuration = movielist.filter(element => parseFloat(element.duration) > parseFloat(duration));
        return movieWithDuration;
    } */
    getMovieByGenre: async (genre) => {
        const moviesByGenre = movielist.filter(element => element.genre.includes(genre));
        return moviesByGenre;
    },
    getMovieByRate: async (rate) => {
        const rateNumber = parseFloat(rate);

        const moviesWithRate = movielist.filter(element => element.rate >= rateNumber);

        return moviesWithRate;
    },
    getMovieByPoster: async (poster) => {
        
            // Filtra las películas que tienen un póster definido
            const moviesWithPoster = movielist.filter(element => element.poster !== undefined && element.poster !== null);
            return moviesWithPoster;
        }
        
    }








