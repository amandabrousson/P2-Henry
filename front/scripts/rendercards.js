// rendercards.js
const container = document.getElementById("cuerpo");

function renderCards(data) {
    data.forEach(element => {
        const activityCard = document.createElement("div");
        activityCard.classList.add("estilocartas");
        activityCard.innerHTML = `
            <img class= "cartita" src=${element.poster}></img>
            <h2 class="titulopeli" >${element.title}</h2>
            <p>${element.year}</p>
        `;
        container.appendChild(activityCard);

        const cartita = activityCard.querySelector('.cartita');
        cartita.addEventListener("click", () => openCard(element, activityCard));
    });
}

function openCard(data, activityCard) {
    const genresString = (data.genre).join(', ');
    const cuerpocartita = document.createElement("div");
    cuerpocartita.classList.add("estilocartita");
    cuerpocartita.innerHTML = `
    <li><p>Director: ${data.director}</p></li>
    <li><p>Género: ${genresString}</p></li>
    <li><p>Duración: ${data.duration}</p></li>
    <li><p>Calificación: ${data.rate}</p></li>
    <div class="video-container">${data.trailer}</div>
    <button class="cerrarBtn" onclick="closeCard()">Cerrar</button>
    `;
    activityCard.appendChild(cuerpocartita);
    const cerrarBtn = cuerpocartita.querySelector('.cerrarBtn');
    cerrarBtn.addEventListener("click", () => closeCard(cuerpocartita));
}

function closeCard(cardElement) {
    if (cardElement.parentElement) {
        cardElement.parentElement.removeChild(cardElement);
    }
}

module.exports = {
    renderCards,
    openCard,
    closeCard
};
