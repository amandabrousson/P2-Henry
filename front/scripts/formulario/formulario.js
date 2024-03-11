// formulario.js
import { enviar } from "./funcionesform.js";

document.addEventListener("DOMContentLoaded", function () {
  const botonAgregar = document.getElementById("agregar");

  botonAgregar.addEventListener("click", function () {
    const formulario = document.getElementById('formulario');
    enviar(formulario);
  });
});
