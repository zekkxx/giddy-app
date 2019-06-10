/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var Stat = sequelize.define("Stat", {
    speed: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [0, 5],
        isInt: true
      }
    },
    acceleration: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [0, 5],
        isInt: true
      }
    },
    reliability: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [0, 5],
        isInt: true
      }
    },
    endurance: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [0, 5],
        isInt: true
      }
    }
  });
  return Stat;
};
