"use strict";
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      usertype: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      location: DataTypes.STRING,
      deleted_status: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    { timestamps: false }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
