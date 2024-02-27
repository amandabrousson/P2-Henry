const { Router } = require("express");
/* const moviesController = require("../controllers"); */
const controller = require("../controllers/controller");

const router = Router();

router.get("/movies", controller.getMovies);
router.get("/movies/params/:movieId", controller.getId);
router.get("/movies/query/title", controller.getTitle);
router.get("/movies/query/year", controller.getYear);
router.get("/movies/query/director", controller.getDirector);
/* router.get("/movies/duration", controller.getDuration); */
router.get("/movies/query/genre", controller.getGenre);
router.get("/movies/query/rate", controller.getRate);
router.get("/movies/poster", controller.getPoster);



module.exports = router;