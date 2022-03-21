const express = require('express');
const { upload } = require('../util/multer');

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

router.post('/', upload.single('postImg'), createNewMovie);

router.post('/updated/:id', updatedMovie);

router.patch('/delete/:id', deleteMovie);



module.exports = { movieRouter: router };