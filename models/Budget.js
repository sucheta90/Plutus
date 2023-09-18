/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Budget extends Model {}

Budget.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "item",
        key: "id",
      },
    },
    month_year_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "month_year",
        key: "id",
      },
    },
    // budget amount
    budget_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    available_amount: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "budget",
  }
);

module.exports = Budget;
