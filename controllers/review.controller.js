const dotenv = require('dotenv');


// models
const { Movies } = require('../models/movies.model');
const { Review } = require('../models/review.model');
const { User } = require('../models/users.model');


// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');

dotenv.config({ path: './config.env' });

exports.getAllReviews = catchAsync((req, res, next) => {

    

});

exports.createNewReview = catchAsync((req, res, next) => {

});

exports.updatedReview = catchAsync((req, res, next) => {

});

exports.deleteReview = catchAsync((req, res, next) => {

});

