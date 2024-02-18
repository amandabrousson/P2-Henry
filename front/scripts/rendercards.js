// rendercards.js


const container = document.getElementById("cuerpo");

function renderCards(data) {

    data.forEach(element => {
        const activityCard = document.createElement("div");
        activityCard.classList.add("estilocartas");
        activityCard.innerHTML = `
            <img src=${element.poster}></img>
            <h2><a href= "#">${element.title}</a></h2>
            <p>${element.year}</p>
        `;
        container.appendChild(activityCard);

    });
    
}

module.exports = renderCards;