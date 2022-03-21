const express = require('express');
const { upload } = require('../util/multer');

const {
    getAllActors,
    getActorById,
    createNewActor,
    updatedActor,
    deleteActor
} = require('../controllers/actor.controller')

const router = express.Router();

router.get('/', getAllActors)

router.get('/:id', getActorById);

router.post('/create/', upload.single('actorImg'), createNewActor);

router.patch('/updated/:id', updatedActor);

router.patch('/delete/:id', deleteActor);

module.exports = { actorRouter: router};