/* eslint-disable quotes */
const User = require("./User");
const Liabilities = require("./Liabilities");
const Asset = require("./Asset");
const Trip = require("./Trip");
const Budget = require("./Budget");
const Item = require("./Item");
const MonthYear = require("./MonthYear");

// Establishig the relationship
User.hasMany(Liabilities);
Liabilities.belongsTo(User);

Item.hasMany(Budget);
MonthYear.hasMany(Budget);
Item.hasMany(Liabilities);
MonthYear.hasMany(Liabilities);

User.hasMany(Asset);
Asset.belongsTo(User);

User.hasMany(Trip);
Trip.belongsTo(User);

User.hasMany(Budget);
Budget.belongsTo(User);

module.exports = { User, Liabilities, Asset, Trip, Budget, Item };
