const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Movies = sequelize.define('movies', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
        allowNull: false,
      },
      img: {
          type: DataTypes.STRING(255),
          unique: true,
          allowNull: false,
      },
      genre: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        defaultValue: 'active',
        allowNull: false
      },
})

module.exports = { Movies };