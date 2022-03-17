const express = require('express');
const { append } = require('express/lib/response');

const {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updatedMovie,
    deleteMovie
} = require('../controllers/movie.controller');

const router = express.Router();

router.get('/', getAllMovies);

router.get('/:id', getMovieById);

router.post('/', createNewMovie);

router.post('/updated/:id', updatedMovie);

router.patch('/deleteMovie/:id', deleteMovie);



module.exports = { movieRouter: router };