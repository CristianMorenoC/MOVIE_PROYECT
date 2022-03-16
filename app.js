const express = require('express');



// controllers
const { globalErrorHandler } = require('./controllers/error.controller');


// Routers


const app = express();

app.use(express.json());

// endpoints
app.use('api/users/', usersRouter);
app.use('api/movies/');
app.use('api/actors/');
app.use('api/review/');


module.exports = { app };