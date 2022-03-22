const express = require('express');
const { upload } = require('../util/multer');

const { validateSesion } = require('../middleweares/auth.middleweare');
const { checkRoleAuth } = require('../middleweares/auth.role.middleweare');

const {
    getAllActors,
    getActorById,
    createNewActor,
    updatedActor,
    deleteActor
} = require('../controllers/actor.controller')

const router = express.Router();

router.get('/', validateSesion, checkRoleAuth(['admin', 'guest']), getAllActors)

router.get('/:id', validateSesion, checkRoleAuth(['admin', 'guest']), getActorById);

router.post('/create/', upload.single('actorImg'), validateSesion, checkRoleAuth(['admin']), createNewActor);

router.patch('/updated/:id', validateSesion, checkRoleAuth(['admin']), updatedActor);

router.patch('/delete/:id', validateSesion, checkRoleAuth(['admin']), deleteActor);

module.exports = { actorRouter: router};