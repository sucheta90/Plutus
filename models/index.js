/* eslint-disable quotes */
const User = require("./User");
const Liabilities = require("./Liabilities");
const Asset = require("./Asset");
const Trip = require("./Trip");
const Budget = require("./Budget");
const Item = require("./Item");

// Establishig the relationship
User.hasMany(Liabilities);
Liabilities.belongsTo(User);

Budget.hasMany(Item);
Liabilities.hasMany(Item);

User.hasMany(Asset);
Asset.belongsTo(User);

User.hasMany(Trip);
Trip.belongsTo(User);

User.hasMany(Budget);
Budget.belongsTo(User);

module.exports = { User, Liabilities, Asset, Trip, Budget, Item };
