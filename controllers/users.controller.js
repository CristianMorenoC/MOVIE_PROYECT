const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// models
const { Actor } = require('../models/actors.model');
const { Movies } = require('../models/movies.model');
const { Review } = require('../models/review.model');
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


exports.deleteUser = catchAsync( async (req, res, next) =>{

});


