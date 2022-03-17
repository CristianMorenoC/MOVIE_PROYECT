const express = require('express');

// controllers

const {
    getAllUsers,
    getUserById,
    createNewUser,
    deleteUser,
    loginUser
} = require('../controllers');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createNewUser);

router.post('/delete/:id', loginUser);


module.exports = { usersRouter: router };


