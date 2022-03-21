const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

// models
const { User } = require('../models/users.model');

// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');

dotenv.config({ path: './config.env' });

exports.getAllUsers = catchAsync( async (req, res, next) =>{

    const users = await User.findAll({
        where: { status: 'active' },
        attributes: { exclude: ['password']},
    });

    res.status(200).json({
        status: 'success',
        data: { users }
    });
});

exports.getUserById = catchAsync( async (req, res, next) =>{

    const { id } = req.params
    
    const user = await User.findOne({ 
        where: { id, status: 'active' },
        attributes: { exclude: ['password']}
    })

    if (!user){
        return next(new AppError(400, 'Id provided not is valid'))
    }

    res.status(200).json({
        status: 'success',
        data: { user }
    })

});

exports.createNewUser = catchAsync( async (req, res, next) =>{

    const { name, email, password, role} = req.body;

    if(!name || !email || !password){
        next(new AppError('400', 'Must be provide name, email and password'));
    }

    const salt = await bcrypt.genSalt(12);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    newUser.password = undefined;

    res.status(201).json({
        status: 'success',
        data: {newUser} 
      });
    
    
});

exports.loginUser = catchAsync( async (req, res, next) =>{

});



