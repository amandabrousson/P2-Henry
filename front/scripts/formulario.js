const botonAgregar = document.getElementById("agregar")
const formulario = document.getElementById('formulario');
/* const mirepositorio = new Repository();  */

/* const handler = () => {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const url = document.getElementById('url').value
    
    if (!titulo || !descripcion || !url){
        alert("Por favor, completa todos los campos.");
    } else {      
        const activity = mirepositorio.createActivity(titulo, descripcion, url);
        
        displayActivity(activity);
        
        document.getElementById('titulo').value = ''
        document.getElementById('descripcion').value = ''
        document.getElementById('url').value = ''
    }
}

function displayActivity(activity) {
    const activityCard = document.createElement('div');
    activityCard.className = "cardElementStyle"
    activityCard.innerHTML = `
    
    <strong></strong> ${activity.titulo}<br>
      <strong></strong> ${activity.descripcion}<br>
      <img src=${activity.url} alt='foto' />
      <button onclick="deleteActivity(${activity.id})">Eliminar</button>
      `;
    
      divgrande.appendChild(activityCard);
      
      console.log('Actividades:', mirepositorio.getallactivities());
      
    } */
    
    function refreshFormulario() {
        formulario.reset();
    };
    

    /* function deleteActivity(id) {
        mirepositorio.deleteActivity(id);
        refreshActivityDisplay();
} */


botonAgregar.addEventListener("click", handler)  // Evento del boton. 

