const app = require("./src/server"); // importar app

app.listen(3000, () =>{  // ejecutar el listener
    console.log("servidor escuchando en puerto 3000");
});