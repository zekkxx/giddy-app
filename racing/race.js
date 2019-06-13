//This model will be used to hold info from races, such as winner and horses that participated


/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// module.exports = function (sequelize, DataTypes) {
//   var Race = sequelize.define("Race", {
//     winner: {
//       type: DataTypes.STRING,
//       allowNUll: false,
//       validate: {
//         len: [1, 16]
//       }
//     },

//   });

//   Race.associate = function (models) {
//     Race.hasMany(models.Horse, { through: "Horse_Race" }
//     );
//   };
//   return Race;
// };