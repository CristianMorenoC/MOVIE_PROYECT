const dotenv = require('dotenv');

// models
const { User } = require('../models/users.model');

// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');

dotenv.config({ path: './config.env' });

exports.getAllUsers = catchAsync( async (req, res, next) =>{

});

exports.getUserById = catchAsync( async (req, res, next) =>{

});

exports.createNewUser = catchAsync( async (req, res, next) =>{

});

exports.loginUser = catchAsync( async (req, res, next) =>{

});



