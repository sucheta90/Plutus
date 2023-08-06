const User = require("./User");
const Liabilities = require("./Liabilities");
const Asset = require("./Asset");
const Trip = require("./Trip");

// Establishig the relationship
User.hasMany(Liabilities);
Liabilities.belongsTo(User);

User.hasMany(Asset);
Asset.belongsTo(User);

User.hasMany(Trip);
Trip.belongsTo(User);

module.exports = { User, Liabilities, Asset, Trip };
