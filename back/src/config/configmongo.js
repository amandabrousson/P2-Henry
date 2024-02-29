require("dotenv").config();
const mongoose = require("mongoose");

const configdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(process.env.MONGO_URI);
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error; // Esto permitirá que se capture el error en la configuración principal
    }
};

module.exports = configdb;