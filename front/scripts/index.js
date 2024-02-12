const container = document.getElementById("cuerpo");

const renderCards = require('./rendercards');

/* const addFilm = () => { */
$.get(`https://students-api.2.us-1.fl0.io/movies/`, (data, status) => {
    renderCards(data);
});







  





