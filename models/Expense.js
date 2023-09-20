/* eslint-disable quotes */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Expense extends Model {}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    expense_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0,
      validate: {
        isDecimal: true,
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "item",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    month_year_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "monthYear",
        key: "id",
      },
    },
    created_at: {
      type: DataTypes.DATE,
      timestamps: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      timestamps: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "expense",
  }
);

module.exports = Expense;
