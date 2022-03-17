const express = require('express');



// controllers
const { globalErrorHandler } = require('./controllers/error.controller');


// Routers
const actorRouter = require('./routes/actor.router');
const moviesRouter = require('./routes/movies.router');
const reviewRouter = require('./routes/review.router');
const usersRouter = require('./routes/users.router');


const app = express();

app.use(express.json());

// endpoints
app.use('api/users/', usersRouter);
app.use('api/movies/', moviesRouter);
app.use('api/actors/', actorRouter);
app.use('api/review/', reviewRouter)


module.exports = { app };