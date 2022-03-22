const express = require('express');
const {checkRoleAuth} = require('../middleweares/auth.role.middleweare');
const { validateSesion } = require('../middleweares/auth.middleweare');

const {
    getAllReviews,
    createNewReview,
    updatedReview,
    deleteReview
} = require('../controllers/review.controller')

const router = express.Router();

router.get('/', validateSesion, checkRoleAuth(['admin', 'guest']), getAllReviews);

router.get('/:id', validateSesion, checkRoleAuth(['admin', 'guest']), getAllReviews);

router.post('/', validateSesion, checkRoleAuth(['admin', 'guest']), createNewReview);

router.put('/:id', validateSesion, checkRoleAuth(['admin', 'guest']), updatedReview);

router.patch('/delete/:id', validateSesion, checkRoleAuth(['admin', 'guest']), deleteReview);

module.exports = { reviewRouter: router };