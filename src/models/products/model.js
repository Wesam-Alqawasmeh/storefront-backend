"use strict";

const productsModel = (sequelize, DataTypes) =>
  sequelize.define("Products", {
    name: { type: DataTypes.STRING, required: true },
    description: { type: DataTypes.STRING, required: true },
    category: { type: DataTypes.STRING, required: true },
    price: { type: DataTypes.INTEGER, required: true },
    inStock: { type: DataTypes.INTEGER, required: true },
    img: { type: DataTypes.STRING, required: true },
  });

module.exports = productsModel;
