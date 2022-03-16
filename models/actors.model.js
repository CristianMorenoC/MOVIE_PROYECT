const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Actor = sequelize.define('actor', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
          type: DataTypes.STRING(255),
          unique: true,
          allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        defaultValue: 'active',
        allowNull: false
      },
})

module.exports = { Actor };