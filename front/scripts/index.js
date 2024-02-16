const tempData = require('./tempData');
const renderCards = require('./rendercards');
const axios = require("axios");

/* const addFilm = () => { 
$.get(`https://students-api.2.us-1.fl0.io/movies/`, (data, status) => {
    renderCards(data);
});
*/

const fetchMovies = async () =>{
    try{
        const data = await axios.get("https://students-api.2.us-1.fl0.io/movies");
        console.log(data.data);
        renderCards(data.data);
    } catch(err){
        renderCards(tempData);
    }
};

fetchMovies();







  





