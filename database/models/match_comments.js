'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MATCH_COMMENTS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MATCH_COMMENTS.init({
    Match_comments_id: DataTypes.UUID,
    Match_id: DataTypes.UUID,
    Comment_message: DataTypes.STRING,
    User_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'MATCH_COMMENTS',
  });
  return MATCH_COMMENTS;
};