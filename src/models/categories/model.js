"use strict";

const categoriesModel = (sequelize, DataTypes) =>
  sequelize.define("Categories", {
    name: { type: DataTypes.STRING, required: true },
    description: { type: DataTypes.STRING, required: true },
  });

module.exports = categoriesModel;
