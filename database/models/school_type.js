'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SCHOOL_TYPE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SCHOOL_TYPE.init({
    School_type_id: DataTypes.UUID,
    School_type_name: DataTypes.STRING,
    School_type_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SCHOOL_TYPE',
  });
  return SCHOOL_TYPE;
};