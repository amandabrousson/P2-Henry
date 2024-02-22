const tempData = require('./tempData'); // Importo 'tempData' con datos de películas de respaldo.
const renderCards = require('./rendercards'); // Importo el módulo 'rendercards', que se encarga de renderizar las tarjetas de películas.
const axios = require("axios"); // Importo la biblioteca 'axios' para realizar solicitudes HTTP.

/* const addFilm = () => { 
$.get(`https://students-api.2.us-1.fl0.io/movies/`, (data, status) => {
    renderCards(data);
});
*/

const fetchMovies = async () =>{ //defino funcion asíncrona
    /* try{ */ // Intento hacer una solicitud GET a la api.
        const data = await axios.get("http://localhost:3000/movies"); // los datos se guardan en data.
        renderCards(data.data); // Llamo a la función 'renderCards' con los datos obtenidos de la API.
    /* } catch(err){
        renderCards(tempData); // En caso de error al hacer la solicitud, llamo a 'renderCards'.
    } */
};

fetchMovies();









  





