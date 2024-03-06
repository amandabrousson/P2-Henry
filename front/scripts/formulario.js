const botonAgregar = document.getElementById("agregar")
const formulario = document.getElementById('formulario');

/* const mirepositorio = new Repository();  */

const enviar = async () => {
    const titulo = document.getElementById('titulo').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const genreCheckboxes = document.querySelectorAll('input[name="nombrec"]:checked');
    const genre = Array.from(genreCheckboxes).map(checkbox => checkbox.value);
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    const trailer = document.getElementById('trailer').value;

    if (!titulo || !year || !director || !duration || genre.length === 0 || !rate || !poster || !trailer) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    try {
        const response = await axios.post("http://localhost:3000/movies", {
            title: titulo,
            year: parseInt(year), 
            director,
            duration,
            genre,
            rate: parseFloat(rate), 
            poster,
            trailer,
        });

        console.log(response.data); 
        refreshFormulario(); 

        alert("La película se agregó correctamente.");
    } catch (error) {
        console.error("Error al enviar datos:", error);
    }
};

function refreshFormulario() {
    formulario.reset();
};


/* function deleteActivity(id) {
    mirepositorio.deleteActivity(id);
    refreshActivityDisplay();
} */


botonAgregar.addEventListener("click", enviar)  // Evento del boton. 

