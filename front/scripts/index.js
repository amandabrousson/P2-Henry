console.log(tempData);

const miRepo= tempData.map((pelicula) => {return aHTML(pelicula);}); 

// Funcion para extraer propiedades
function aHTML(pelicula){
    const { title, year, director, duration, genre, rate, poster } = pelicula;

// Creo los elementos HTML
const mititulo = document.createElement("h3");
const miurl = document.createElement("img");
const miaño = document.createElement("p");
const midirector = document.createElement("p");
const miduracion = document.createElement("p");
const migenero = document.createElement("p");
const mirate = document.createElement("p");

// Le asigno sus propiedades 
/* mititulo.id = id; */
mititulo.textContent = title;
miurl.src = poster;
miaño.textContent = `Año: ${year}`;
midirector.textContent =`Director: ${director}`;
miduracion.textContent = `Duración: ${duration}`;
migenero.textContent = `Género: ${genre}`;
mirate.textContent = `Calificación: ${rate}`;;

const activityCard = document.createElement("div");

// agrego los elementos al nuevo div
activityCard.appendChild(mititulo);
activityCard.appendChild(miurl);
activityCard.appendChild(miaño);
activityCard.appendChild(midirector);
activityCard.appendChild(miduracion);
activityCard.appendChild(migenero);
activityCard.appendChild(mirate);

activityCard.classList.add('estilocartas');

// agrego al div grande
document.getElementById("cuerpo").appendChild(activityCard);

// agrego clases css
mititulo.classList.add("cont-titulo");
miurl.classList.add("cont-url");
miaño.classList.add("cont-año");
midirector.classList.add("cont-director");
miduracion.classList.add("cont-duracion");
migenero.classList.add("cont-genero");
mirate.classList.add("cont-rate");

// retorno el div card

return activityCard;
};


  





