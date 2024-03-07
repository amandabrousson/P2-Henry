const validarDatos = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster, trailer } = req.body;
    if (!title || !year || !director || !duration || !genre || !rate || !poster || !trailer) {
        return res.status(400).json({ error: 'Todos los datos son obligatorios' });
    }
    next();
}

module.exports= validarDatos;