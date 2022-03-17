const express = require('express');

const = {

} = require('../controllers')

const router = express.Router();

router.get('/:id', getActorById);

router.post('/create/', createNewActor);

router.patch('/updated/:id', updatedActor);

router.patch('delete/:id', deleteActor);

module.exports = { actorRouter: router};