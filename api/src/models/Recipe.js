const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
     title: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }, 
    },
      id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.fn("gen_random_uuid"),
      unique: true,
      validate: {
        allowNull: false
      },
      primaryKey: true
    },
    summary: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
        allowNull: false
      }
    },
     score: {
      type: DataTypes.INTEGER
    },
      healthScore: {
      type: DataTypes.INTEGER
    },
    instructions: {
      type: DataTypes.TEXT
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: 'https://unsplash.com/photos/kXQ3J7_2fpc',
      validate:{
        isUrl: true
      }
    },
    origin: {
      type: DataTypes.STRING,
      defaultValue: 'database'
    }
  });
};
