'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  USER.init({
    User_id: DataTypes.UUID,
    User_role_id: DataTypes.UUID,
    Username: DataTypes.STRING,
    Password: DataTypes.DOUBLE,
    Mobile_tel: DataTypes.DOUBLE,
    Email: DataTypes.DOUBLE,
    User_photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USER',
  });
  return USER;
};