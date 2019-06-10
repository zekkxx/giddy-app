/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
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
    }
  });
  Horse.associate = function(models) {
    Horse.belongsTo(models.User);
    Horse.hasOne(models.Stat);
  };
  return Horse;
};
