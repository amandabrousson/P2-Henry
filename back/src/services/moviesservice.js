// funcion que retorne un arreglo con las pelis podemos hacer peticion a la appi. el controller es el que devuelve el arreglo.
// en index.js de front tengo que cambiar la direccion de la api al locl host y ejecutar el npm run build para que actualice el front. 
//funcion de tipo async que retorne un arreglo con las peliculas que tenemos. podemos hacer peticion a la api. el controller  lo recibe y dsp se respone al cliente. luego lo cambio en index de front al await axios.get le cambio la appi por el localhost:3000/movies y correr npm build
/* import axios from 'axios';
const apiMovie= {
    apiUrl: "https://students-api.2.us-1.fl0.io/movies", */

let nextId = 1;

class Movies {
    constructor(title, year, director, duration, genre, rate, poster) {
        if (!title || !director || !year) {
            throw new Error("Propiedades no válidas");
        }
        this.id = nextId++;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = parseFloat(rate);
        this.poster = poster;
    }
}

const movielist = [];

const GuardiansVol2 = new Movies("Guardians of the Galaxy Vol. 2", 2017, "James Gunn", "2h 16min", ["Action", "Adventure", "Comdedy"], 7.7, "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg");
movielist.push(GuardiansVol2);

const starwarsIV = new Movies("Star Wars: Episode IV - A New Hope", 1977, "George Lucas", "2h 1min", ["Action", "Adventure", "Fantasy", "Sci-Fi"], 8.7, "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg");
movielist.push(starwarsIV);

const lordofrings1 = new Movies("The Lord of the Rings: The Fellowship of the Ring", 2001, "Peter Jackson", "2h 58min", ["Action", "Adventure", "Drama", "Fantasy"], 8.8, "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg");
movielist.push(lordofrings1);

const titanic = new Movies("Titanic", 1988, "James Cameron", "3h 30m", ["Drama", "Aventura", "Romántico"], 7.9, "https://c8.alamy.com/compes/ejwp0h/poster-de-pelicula-titanic-1997-ejwp0h.jpg");
movielist.push(titanic);

/* console.log(movielist); */
/* createMovie(title, poster, year){ /* un metodo que le permita filtrar las actividades   
            const id = this.getNextId();
            const movie = new Movies(id, title, poster, year);
            this.insertMovie(movie);
            return movie;
        }; */

module.exports = {

    getAllMovies: async () => {
        return movielist;
    },

    getOneMovie: async (id) =>{
        const movieId = movielist.filter(element => element.id === Number(id));
        return movieId;
    },
    getMovieByTitle: async (title) => {
        const lowerCaseTitle = title.toLowerCase();
        const moviesWithTitle = movielist.filter(element => element.title.toLowerCase() === lowerCaseTitle);
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
    // moviesservice.js

    getMovieByRate: async (rate) => {
        const rateNumber = rate;

        const moviesWithRate = movielist.filter(element => Math.floor(element.rate) === Math.floor(rateNumber));

        return moviesWithRate;
    },

    getMovieByPoster: async (poster) => {

        // Filtra las películas que tienen un póster definido
        const moviesWithPoster = movielist.filter(element => element.poster !== undefined && element.poster !== null);
        return moviesWithPoster;
    }

}








