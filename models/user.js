/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
  var User =
        sequelize.define("User", {
          password: {
            type: DataTypes.STRING,
            allowNUll: false,
            validate: {
              len: [1, 12],
            }
          },
          user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 16]
            },
          }
        });
  User.associate = function(models) {
    User.hasMany(models.Horse, {
      onDelete: "cascade"
    });
  };
  return User;
};
