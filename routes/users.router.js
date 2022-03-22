const express = require('express');

const  {validateSesion}  = require('../middleweares/auth.middleweare');
const { checkRoleAuth } = require('../middleweares/auth.role.middleweare');

// controllers
const {
    getAllUsers,
    getUserById,
    createNewUser,
    loginUser
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', validateSesion, checkRoleAuth(['admin']), getAllUsers);

router.get('/:id', validateSesion, checkRoleAuth(['admin']),  getUserById);

router.post('/', validateSesion, checkRoleAuth(['admin']), createNewUser);

router.post('/login', loginUser);


module.exports = { usersRouter: router };


