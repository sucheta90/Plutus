/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Liabilities extends Model {}

Liabilities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "liabilities",
  }
);

module.exports = Liabilities;
