/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
module.exports = function(sequelize, DataTypes) {
  //Creates table "users" in horsedb schema. var user is pluralized to create table name as default Sequelize setting
  var User = sequelize.define("User", {
    //creates "password" column in "users" table. Value is a string, cannot be NULL, and needs a length of 1-12 characters
    password: {
      type: DataTypes.STRING,
      allowNUll: false,
      validate: {
        len: [1, 12]
      }
    },
    //creates "username" column in "users" table
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 16]
      }
    }
  });
  //creates association between two tables. The primary key from users table will be id(created column). user_id will be created in the horses table as a foreign key
  User.associate = function(models) {
    User.hasMany(models.Horse, {
      onDelete: "cascade"
    });
  };
  //Required validation for passport
  User.prototype.validPassword = function(password){
    return this.password === password;
  };

  return User;
};
