const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


// models
const { Movies } = require('../models/movies.model');
const { Review } = require('../models/review.model');
const { User } = require('../models/users.model');


// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');
const { promisify } = require('util');
const { filterObj } = require('../util/filterObj');

dotenv.config({ path: './config.env' });

exports.getAllReviews = catchAsync(async ( req, res, next) => {

    const reviews = await Review.findAll({ where: { status: 'active' }})

    if(!reviews){
        return next(new AppError(404, 'there are not reviews'));
    };

    res.status(200).json({
        status: 'success',
        data: { reviews }
    })
});

exports.createNewReview = catchAsync( async (req, res, next) => {

    const { title, comment, rating, movieId } = req.body;

    const token = req.headers.authorization.split(' ')[1];

    const decodedToken = await promisify(jwt.verify)(
        token,
        process.env.SECRET_KEY
    );

    const user = await User.findOne({
        where: {id: decodedToken.id, status:'active'}
    });

    const newReview = await Review.create({
        title,
        comment,
        rating,
        movieId,
        userID: user.id
    });

    res.status(200).json({
        status: 'success',
        data: { newReview }
    })
});

exports.updatedReview = catchAsync(async (req, res, next) => {

    const { id } = req.params;

    const data = filterObj(req.body, 'title', 'comment', 'rating' );

    const review = await Review.findOne({ where: { id, status: 'active'}});

    if(!review){
        return next(new AppError(400, 'Review not found, invalid ID'));
    };

    review.update({...data});

    res.status(200).json({ status: 'success'});

});

exports.deleteReview = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const review = await Review.findOne({ where: { id, status: 'active'}});

    if(!review){
        return next(new AppError(400, 'Review not found, invalid ID'))
    }

    review.update({ status: 'deleted'});

    res.status(204).json({ status: 'success' })

});

