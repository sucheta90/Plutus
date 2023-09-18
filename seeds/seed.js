/* eslint-disable quotes */

const sequelize = require("../config/connection");
const { Trip, Item } = require("../models");

const tripSeedData = require("./trip.json");
const itemSeedData = required("./item.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const trips = await Trip.bulkCreate(tripSeedData);

  const items = await Item.bulkCreate(itemSeedData);

  process.exit(0);
};

seedDatabase();
