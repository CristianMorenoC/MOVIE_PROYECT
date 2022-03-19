const express = require('express');

// controllers

const {
    getAllUsers,
    getUserById,
    createNewUser,
    loginUser
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createNewUser);

router.post('/delete/:id', loginUser);


module.exports = { usersRouter: router };


