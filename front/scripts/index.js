const tempData = require('./tempData'); // Importo 'tempData' con datos de películas de respaldo.
const { renderCards, openCard, closeCard } = require('./rendercards');
const axios = require("axios"); // Importo la biblioteca 'axios' para realizar solicitudes HTTP.

/* const addFilm = () => { 
$.get(`https://students-api.2.us-1.fl0.io/movies/`, (data, status) => {
    renderCards(data);
});
*/

const fetchMovies = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        console.log(response.data);
        renderCards(response.data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
};


fetchMovies();









  





