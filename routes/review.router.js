const express = require('express');
const { app } = require('../app');

const {
    getAllReviews,
    createNewReview,
    updatedReview,
    deleteReview
} = require('../controllers')

const router = express.Router();

app.get('/', getAllReviews);

app.post('/', createNewReview);

app.put('/:id', updatedReview);

app.patch('/delete/:id', deleteReview);

module.exports = { reviewRouter: router };