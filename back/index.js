/* Punto de entrada principal de tu aplicación. Importo la instancia de la aplicación app desde el archivo server.js  */

const app = require("./src/server"); // importar app

app.listen(3000, () =>{  // ejecutar el listener
    console.log("servidor escuchando en puerto 3000");
});