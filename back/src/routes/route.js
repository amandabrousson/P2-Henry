const { Router } = require("express");
const controller = require("../controllers/controller");


const router = Router();

router.get("/movies", controller.getMovies);
router.get("/movies/bytitle", controller.getTitle);
router.get("/movies/:id", controller.getId);
router.get("/movies/query/year", controller.getYear);
router.get("/movies/query/director", controller.getDirector);
router.get("/movies/query/byduration", controller.getDuration);
router.get("/movies/query/genre", controller.getGenre);
router.get("/movies/query/rate", controller.getRate);
router.get("/movies/poster", controller.getPoster);

// para crear películas tengo que crear una ruta POST y conectarla con el controlador
const validarDatos = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster, trailer } = req.body;
    if (!title || !year || !director || !duration || !genre || !rate || !poster || !trailer) {
        return res.status(400).json({ error: 'Todos los datos son obligatorios' });
    }
    next();
}
router.post("/movies", validarDatos, controller.createMovies);

module.exports = router;