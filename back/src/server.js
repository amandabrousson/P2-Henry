/* Configura la aplicación Express con middleware y rutas */

const express = require('express');
const router = require('./routes/route');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3000;

app.use((err, req, res, next) =>{
    res.status(err.statusCode || 500).json({error: err.message });
});

module.exports = app;