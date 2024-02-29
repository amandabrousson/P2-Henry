const tempData = require('./tempData'); // Importo 'tempData' con datos de películas de respaldo.
const { renderCards, openCard, closeCard } = require('./rendercards');
const axios = require("axios"); // Importo la biblioteca 'axios' para realizar solicitudes HTTP.

/* const addFilm = () => { 
$.get(`https://students-api.2.us-1.fl0.io/movies/`, (data, status) => {
    renderCards(data);
});
*/

const fetchMovies = async () =>{ //defino funcion asíncrona
        const data = await axios.get("http://localhost:3000/movies"); // los datos se guardan en data.
        renderCards(data.data); // Llamo a la función 'renderCards' con los datos obtenidos de la API.
    
};

fetchMovies();









  





