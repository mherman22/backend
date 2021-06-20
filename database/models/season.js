'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SEASON extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SEASON.init({
    Season_id: DataTypes.UUID,
    Season_name: DataTypes.STRING,
    Season_start: DataTypes.DATE,
    Season_end: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SEASON',
  });
  return SEASON;
};