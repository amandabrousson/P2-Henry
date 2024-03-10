const validarDatos = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster, trailer } = req.body;

    if (isNaN(year) || year.toString().length < 4 || year.toString().length > 4) {
        return res.status(400).json({ error: "El campo 'year' debe ser un número de 4 dígitos." });
    }
    if (!title || !year || !director || !duration || !genre || !rate || !poster || !trailer) {
        return res.status(400).json({ error: 'Todos los datos son obligatorios' });
    }
    next();
}

module.exports= validarDatos;