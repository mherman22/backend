'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SCHOOL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SCHOOL.init({
    School_id: DataTypes.UUID,
    school_type_id: DataTypes.UUID,
    school_name: DataTypes.STRING,
    school_logo: DataTypes.STRING,
    Physical_address: DataTypes.STRING,
    Mobile_telephone: DataTypes.DOUBLE,
    Other_telephone: DataTypes.DOUBLE,
    School_email: DataTypes.STRING,
    School_website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SCHOOL',
  });
  return SCHOOL;
};