const express = require('express');

const {
    getAllReviews,
    createNewReview,
    updatedReview,
    deleteReview
} = require('../controllers/review.controller')

const router = express.Router();

router.get('/', getAllReviews);

router.get('/:id', getAllReviews);

router.post('/', createNewReview);

router.put('/:id', updatedReview);

router.patch('/delete/:id', deleteReview);

module.exports = { reviewRouter: router };