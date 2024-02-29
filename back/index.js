/* Punto de entrada principal de tu aplicación. Importo la instancia de la aplicación app desde el archivo server.js  */

const app = require("./src/server");
const configdb = require("./src/config/configmongo");

configdb().then(() => {
    app.listen(3000, () => {
        console.log("Servidor escuchando en puerto 3000");
    });
}).catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
});
