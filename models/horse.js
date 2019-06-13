/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

//using sequelize, this model creates a horse table inside of horsedb. The table will have horse_name, age, speed, acceleration, reliability, and endurance as columns. The id column and user_id(as foreign key) will be auto-generated through sequelize.
module.exports = function(sequelize, DataTypes) {
  var Horse = sequelize.define("Horse", {
    horse_name: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
        len: [1, 16]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [1, 20],
        isInt: true
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [1, 10],
        isInt: true
      }
    },
    acceleration: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [1, 10],
        isInt: true
      }
    },
    reliability: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [1, 10],
        isInt: true
      }
    },
    endurance: {
      type: DataTypes.INTEGER,
      allowNUll: false,
      validate: {
        len: [1, 10],
        isInt: true
      }
    }
  });

  Horse.associate = function(models) {
    Horse.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Horse;
};
