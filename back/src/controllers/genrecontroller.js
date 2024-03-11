const genreservice = require("../services/genreservice");

module.exports ={
    getGenres: async (req, res) =>{
        const genre = await genreservice.getAllGenres();
        res.status(200).json(genre);
    },

    createGenre: async (req, res) =>{
        const { genre } = req.body;
        const newGenre = await genreservice.createGenre({ genre });
        res.status(201).json(newGenre);
    }
}; 