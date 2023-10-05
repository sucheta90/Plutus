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
    // budget amount
    budget_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    available_amount: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ["user_id", "month_year_id", "item_id"],
      },
    ],
    underscored: true,
    modelName: "budget",
  }
);

module.exports = Budget;
