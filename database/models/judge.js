'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JUDGE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  JUDGE.init({
    Judge_id: DataTypes.UUID,
    Judge_name: DataTypes.STRING,
    Judge_resume: DataTypes.STRING,
    Judge_contact: DataTypes.DOUBLE,
    Judge_photo: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'JUDGE',
  });
  return JUDGE;
};