const sequelize = require("../config/connection");
const { Trip } = require("../models");

const tripSeedData = require("./trip.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const trips = await Trip.bulkCreate(tripSeedData);

  process.exit(0);
};

seedDatabase();
