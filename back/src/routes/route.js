const { Router } = require("express");
/* const moviesController = require("../controllers"); */
const controller = require("../controllers/controller");

const router = Router();

router.get("/movies", controller.getMovies);
router.get("/movies/bytitle", controller.getTitle);
router.get("/movies/:id", controller.getId);
router.get("/movies/query/year", controller.getYear);
router.get("/movies/query/director", controller.getDirector);
/* router.get("/movies/duration", controller.getDuration); */
router.get("/movies/query/genre", controller.getGenre);
router.get("/movies/query/rate", controller.getRate);
router.get("/movies/poster", controller.getPoster);

// para crear películas tengo que crear una ruta POST y conectarla con el controlador
router.post("/movies", controller.createMovies);

module.exports = router;