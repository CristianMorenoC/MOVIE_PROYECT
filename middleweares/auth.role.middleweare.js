const  jwt  = require('jsonwebtoken');
const { promisify } = require('util');


const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');
const { User } = require('../models/users.model');


exports.checkRoleAuth = (role) =>  catchAsync( async (req, res, next)=> {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    };

    if(!token){
        return next(new AppError(401, 'Invalid session'));
    };

    const decodedToken = await promisify(jwt.verify)(
        token,
        process.env.SECRET_KEY
    );

    const user = await User.findOne({
        where: {id: decodedToken.id, status:'active'}
    });


    if(!user){
        return next(new AppError(500, 'User not found'))
    }

    if(!role.includes(user.role)){
        return next(new AppError(500, 'You dont have permissions'))
    }

    next();

});