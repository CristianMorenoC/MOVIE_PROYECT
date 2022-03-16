const express = require('express');

// controllers

const {
    getAllUsers,
    getUserById,
    createNewUser,
    deleteUser,
} = require('../controllers');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.get('/', createNewUser);

router.get('/delete/:id', deleteUser);

module.exports = { usersRouter: router };


