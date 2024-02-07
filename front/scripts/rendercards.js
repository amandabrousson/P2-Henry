// rendercards.js
const container = document.getElementById("cuerpo");

function renderCards(data) {
    data.forEach(element => {
        const activityCard = document.createElement("div");
        activityCard.classList.add("estilocartas");
        activityCard.innerHTML = `
            <h2>${element.title}</h2>
            <img src=${element.poster}></img>
            <p>${element.year}</p>
        `;
        container.append(activityCard);
    });
}



module.exports = renderCards;