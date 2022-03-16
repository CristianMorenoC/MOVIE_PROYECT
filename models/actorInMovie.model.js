const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const ActorsInMovies = sequelize.define('actorsInMovies', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      actorId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      movieId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
})

module.exports = { ActorsInMovies };