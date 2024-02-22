const { Router } = require("express");
/* const moviesController = require("../controllers"); */
const controller = require("../controllers/controller");

const router = Router();

router.get("/movies", controller.getMovies);
router.get("/movies/title", controller.getTitle);
router.get("/movies/year", controller.getYear);
router.get("/movies/director", controller.getDirector);
/* router.get("/movies/duration", controller.getDuration); */
router.get("/movies/genre", controller.getGenre);
router.get("/movies/rate", controller.getRate);
router.get("/movies/poster", controller.getPoster);



module.exports = router;