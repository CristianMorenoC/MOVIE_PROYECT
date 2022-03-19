const express = require('express');

const {
    getActorById,
    createNewActor,
    updatedActor,
    deleteActor
} = require('../controllers/actor.controller')

const router = express.Router();

router.get('/:id', getActorById);

router.post('/create/', createNewActor);

router.patch('/updated/:id', updatedActor);

router.patch('delete/:id', deleteActor);

module.exports = { actorRouter: router};