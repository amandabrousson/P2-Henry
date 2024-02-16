// rendercards.js


const container = document.getElementById("cuerpo");

function renderCards(data) {

    data.forEach(element => {
        const activityCard = document.createElement("div");
        activityCard.classList.add("estilocartas");
        activityCard.innerHTML = `
            <h2><a href= "#">${element.title}</a></h2>
            <img src=${element.poster}></img>
            <p>${element.year}</p>
        `;
        container.appendChild(activityCard);

    });
    
}

module.exports = renderCards;