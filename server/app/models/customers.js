'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.TEXT,
    pincode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'customers',
    underscored: true,
  });
  return customers;
};