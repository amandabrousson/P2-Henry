const addFilm = () => {
$.get(`https://students-api.2.us-1.fl0.io/movies/`, (data, status) => {
    // ownRepo.createMovie(data);
    // console.log(ownRepo.getmovies());
    console.log(data);
    aHTML(data)
});
}

const container = document.getElementById("cuerpo")

//a esta funcion le entra la data obtenida de la API
function aHTML(data){

    //recorres el arreglo que viene de la API
    data.forEach(element => {
        
        const activityCard = document.createElement("div"); // creas el div de las cards
        activityCard.classList.add("estilocartas");
        //mandas todo al DOM
        activityCard.innerHTML =` 
            <h2>${element.title}</h2>
            <img src=${element.poster}</img>
            <p>${element.year}</p>
        `
        //mando todo al contenedor grande
        container.append(activityCard) 
    });
};
//llamo a la funcion
addFilm()

  





