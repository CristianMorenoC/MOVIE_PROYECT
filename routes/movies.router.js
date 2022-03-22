const express = require('express');
const { upload } = require('../util/multer');

const { checkRoleAuth } = require('../middleweares/auth.role.middleweare');
const { validateSesion } = require('../middleweares/auth.middleweare');

const {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updatedMovie,
    deleteMovie
} = require('../controllers/movie.controller');

const router = express.Router();

router.get('/', validateSesion, checkRoleAuth(['admin', 'guest']), getAllMovies);

router.get('/:id', validateSesion, checkRoleAuth(['admin', 'guest']), getMovieById);

router.post('/', validateSesion, checkRoleAuth(['admin']), upload.single('postImg'), createNewMovie);

router.post('/updated/:id', validateSesion, checkRoleAuth(['admin']), updatedMovie);

router.patch('/delete/:id', validateSesion, checkRoleAuth(['admin']), deleteMovie);



module.exports = { movieRouter: router };