const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MonthYear extends Model {}

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "monthYear",
  }
);

module.exports = MonthYear;
