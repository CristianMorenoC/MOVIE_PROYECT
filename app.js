const express = require('express');
const { globalErrorHandler } = require('./controllers/error.controller');

// controllers

// Routers
const {actorRouter} = require('./routes/actor.router');
const {movieRouter} = require('./routes/movies.router');
const {reviewRouter} = require('./routes/review.router');
const {usersRouter} = require('./routes/users.router');
const { AppError } = require('./util/appError');


const app = express();

app.use(express.json());

// endpoints
app.use('/api/users', usersRouter);
app.use('/api/movies', movieRouter);
app.use('/api/movies/review', reviewRouter);
app.use('/api/actors', actorRouter);
// app.use('/api/review', reviewRouter);

app.use('*', (req, res, next) => {
    next(new AppError('404', `${req.originalUrl} not found`));
});

app.use(globalErrorHandler);



module.exports = { app };