const { Router } = require("express");
const controller = require("../controllers/controller");
const validarDatos = require("../middleware/middleware");


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

router.post("/movies", validarDatos, controller.createMovies);

module.exports = router;