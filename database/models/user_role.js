'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USER_ROLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  USER_ROLE.init({
    User_role_id: DataTypes.UUID,
    User_role_name: DataTypes.STRING,
    User_role_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USER_ROLE',
  });
  return USER_ROLE;
};