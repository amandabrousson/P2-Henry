// funcion que retorne un arreglo con las pelis podemos hacer peticion a la appi. el controller es el que devuelve el arreglo.
// en index.js de front tengo que cambiar la direccion de la api al locl host y ejecutar el npm run build para que actualice el front. 
//funcion de tipo async que retorne un arreglo con las peliculas que tenemos. podemos hacer peticion a la api. el controller  lo recibe y dsp se respone al cliente. luego lo cambio en index de front al await axios.get le cambio la appi por el localhost:3000/movies y correr npm build
/* import axios from 'axios';
const apiMovie= {
    apiUrl: "https://students-api.2.us-1.fl0.io/movies", */

let nextId = 1;

class Movies {
    constructor(title, year, director, duration, genre, rate, poster, trailer) {
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
        this.trailer = trailer;
    }
}

const movielist = [];

const GuardiansVol2 = new Movies("Guardians of the Galaxy Vol. 2", 2017, "James Gunn", "2h 16min", ["Action", "Adventure", "Comedy"], 7.7, "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/wUn05hdkhjM?si=kDTurcy2nQfNlQrG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(GuardiansVol2);

const starwarsIV = new Movies("Star Wars: Episode IV - A New Hope", 1977, "George Lucas", "2h 1min", ["Action", "Adventure", "Fantasy", "Sci-Fi"], 8.7, "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/vZ734NWnAHA?si=FnLG2Kl9TanbUEjq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(starwarsIV);

const lordofrings1 = new Movies("The Lord of the Rings: The Fellowship of the Ring", 2001, "Peter Jackson", "2h 58min", ["Action", "Adventure", "Drama", "Fantasy"], 8.8, "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/3GJp6p_mgPo?si=pNoCZdwgy5UkTr45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(lordofrings1);

const titanic = new Movies("Titanic", 1988, "James Cameron", "3h 30m", ["Drama", "Adventure", "Romantic"], 7.9, "https://pics.filmaffinity.com/titanic-321994924-large.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/tA_qMdzvCvk?si=o6dR4702xSOZaMbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(titanic);

const harryPotter1 = new Movies("Harry Potter and the philosopher`s stone", 2001, "Chris Columbus", "2h 32min", ["Fantasy", "Adventure"], 7.6, "https://musicart.xboxlive.com/7/92e05000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", '<iframe width="560" height="315" src="https://www.youtube.com/embed/uwM2oPGQMl4?si=bvotmroWSZyOk51u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(harryPotter1);

const DavinciCode = new Movies("The Da Vinci Code", 2006, "Ron Howard", "2h 29min", ["Mysthery", "Thriller"], 6.6, "https://m.media-amazon.com/images/M/MV5BZTY3OTE2ZTktMDlmNC00NDY2LTg1NWUtNjcxNTNiYzhjYjMxXkEyXkFqcGdeQXVyMTI2NTQ4MDUw._V1_FMjpg_UX1000_.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/5sU9MT8829k?si=N9MQJXfD4tQXWHeh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(DavinciCode);

const efectoMariposa = new Movies("Butterfly Effect", 2004, "Eric Bress J.", "1h 53min", ["Suspense", "Sci-Fi"], 7.3, "https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/kkWQLjI2rAU?si=kVPDRl3fB4LhdySM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(efectoMariposa);

const interestelar = new Movies("Intrestellar", 2014, "Christopher Nolan", "2h 49min", ["Adventure", "Sci-Fi"], 8.7, "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", '<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E?si=7PZGslc99RKLDddu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
movielist.push(interestelar);



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








