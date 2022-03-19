const dotenv = require('dotenv');

// models
const { Actor } = require('../models/Actors.model');

// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');

dotenv.config({ path: './config.env' });


exports.getActorById = catchAsync( (req, res, next) => {

});

exports.createNewActor = catchAsync( (req, res, next) => {

});


exports.updatedActor = catchAsync( (req, res, next) => {

});


exports.deleteActor = catchAsync( (req, res, next) => {

});
