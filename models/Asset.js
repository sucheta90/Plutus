const { Model, DataTypes, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Assest extends Model {}

Assest.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
