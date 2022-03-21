const dotenv = require('dotenv');
const { ref, uploadBytes } = require('firebase/storage');


// models
const { Actor } = require('../models/actors.model');
const { Movies } = require('../models/movies.model');
const { Review } = require('../models/review.model');
const { User } = require('../models/users.model');

// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');
const { storage } = require('../util/firebase');
const { filterObj } =  require('../util/filterObj');

dotenv.config({ path: './config.env' });


exports.getAllMovies = catchAsync( async (req, res, next) => {

    const movies = await Movies.findAll({where: { status: 'active'} }); 

    res.status(200).json({
        status: 'success',
        data: { movies }
    });
});

exports.getMovieById = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const movie = await Movies.findOne({        
        where: { id, status: 'active' },
        include: [{
            model: Review,
            include: [{
                model: User
            }]
        },
        {model: Actor}]
    });

    if(!movie){
        return next(new AppError(400, 'Id provided is invalid'))
    }

    res.status(201).json({
        status: 'success',
        data: {movie}
    })

});

exports.createNewMovie = catchAsync( async(req, res, next) => {

    const { title, description, duration, genre } = req.body;


    if(!title || !description || !duration || !genre){
        return next(new AppError(400, 'Tittle, description, duration, img or genre is empity or invalid'))
    };

    const imgRef =  ref(storage, `img/${Date.now()}-${req.file.originalname}`);

    const result = await uploadBytes(imgRef, req.file.buffer);

    const newMovie = await Movies.create({
        title,
        description,
        duration,
        genre,
        img: result.metadata.fullPath
    });


    res.status(201).json({
        status: 'success',
        data: { newMovie }
    });

});

exports.updatedMovie = catchAsync( async(req, res, next) => {

    const { id } = req.params;
    const data = filterObj(req.body, 'title', 'description', 'duration', 'genre');

    const movie = await Movies.findOne({
        where: { id, status: 'active'}
    });

    if(!movie){
        return next(new AppError(400, `movie with ID ${id} doesnt exist`))
    };

    movie.update({...data});

    res.status(200).json({ status: 'success' })
});

exports.deleteMovie = catchAsync( async(req, res, next) => {

    const { id } = req.params;

    const movie = await Movies.findOne({
        where: { id, status: 'active'}
    });

    if(!movie){
        return next(new AppError(400, 'Id provided is invalid'))
    };

    movie.update({status: 'deleted'});

    res.status(204).json({ status: 'success' })

});