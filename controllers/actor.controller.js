const dotenv = require('dotenv');
const { ref, uploadBytes } = require('firebase/storage');


// models
const { Actor } = require('../models/Actors.model');

// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');
const { storage } = require('../util/firebase');
const { filterObj } = require('../util/filterObj');

dotenv.config({ path: './config.env' });


exports.getAllActors = catchAsync( async (req, res, next) => {

    const actors = await Actor.findAll({
        where: { status: 'active' }
    });

    res.status(200).json({
        status: 'success',
        data: {actors}
    })
})

exports.getActorById = catchAsync( async (req, res, next) => {

    const { id } =  req.params;

    const actor = await Actor.findAll({
        where: { id, status: 'active'}
    });

    if(!actor){
        return next(new AppError(400, 'Invalid ID'))
    }

    res.status(200).json({
        status: 'success',
        data: { actor }
    })

});

exports.createNewActor =  catchAsync( async (req, res, next) => {

    const {name, country, age } = req.body;

    if(!name || !country || !age){
        return next(new AppError(400, 'Must be provide name, country and age to register an actor'))
    };

    const refImg = ref(storage, `img/actors-${Date.now()}-${req.file.originalname}`);

    const result = await uploadBytes(refImg, req.file.buffer);

    const newActor = await Actor.create({
        name,
        country,
        age,
        img: result.metadata.fullPath
    })

    res.status(201).json({
        status: 'success',
        data: { newActor }
    })
});


exports.updatedActor = catchAsync( async (req, res, next) => {

    const { id } = req.params;
    const data = filterObj(req.body, 'name', 'country', 'age');

    const actor = await Actor.findOne({where: {id, status: 'active'}});

    if(!actor){
        return next(new AppError(400, 'Actor not found, check the id'))
    };

    actor.update({...data});

    res.status(200).json({status: 'success'});
});

exports.deleteActor = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const actor = await Actor.findOne({
        where: {id, status: 'active'}
    });

    if(!actor){
        return next(new AppError(400, 'Actor with ID given doesnt exist'))
    };

    actor.update({status: 'deleted'});

    res.status(200).json({ status: 'success' });
});
