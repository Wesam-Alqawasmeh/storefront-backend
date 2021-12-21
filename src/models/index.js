"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const categoriesModel = require("./categories/model.js");
const productsModel = require("./products/model.js");
// const userModel = require("../auth/models/users");
const Collection = require("./data-collection.js");
require("dotenv").config();

const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

const DATABASE_CONFIG =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
const categories = categoriesModel(sequelize, DataTypes);
const products = productsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  categories: new Collection(categories),
  products: new Collection(products),
  //   users: userModel(sequelize, DataTypes),
};
