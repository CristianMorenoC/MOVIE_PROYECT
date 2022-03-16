const express = require('express');

const app = express();

app.use(express.json());

app.use('/movies/')

module.exports = { app };