/* eslint-disable quotes */

const sequelize = require("../config/connection");
const { Trip, Item, MonthYear } = require("../models");

const tripSeedData = require("./trip.json");
const itemSeedData = require("./item.json");
const monthYearData = require("./monthYear.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // eslint-disable-next-line no-unused-vars
  const trips = await Trip.bulkCreate(tripSeedData);
  // eslint-disable-next-line no-unused-vars
  const items = await Item.bulkCreate(itemSeedData);

  // eslint-disable-next-line no-unused-vars
  const monthYear = await MonthYear.bulkCreate(monthYearData);

  process.exit(0);
};

seedDatabase();
