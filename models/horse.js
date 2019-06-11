/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Horse = sequelize.define(
    "Horse",
    {
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
    },
    {
      timestamps: true,
      updatedAt: false,
      underscored: true
    }
  );
  Horse.associate = function(models) {
    Horse.belongsTo(models.User);
  };
  return Horse;
};
