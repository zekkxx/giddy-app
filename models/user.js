/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      password: {
        type: DataTypes.STRING,
        allowNUll: false,
        validate: {
          len: [1, 12]
        }
      },
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 16]
        }
      }
    },
    {
      timestamps: true,
      updatedAt: false,
      underscored: true
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Horse, {
      onDelete: "cascade"
    });
  };
  User.prototype.validPassword = function(password){
    return this.password === password;
  };

  User.sync();
  return User;
};
