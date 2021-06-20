'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MATCH_NEWS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MATCH_NEWS.init({
    Match_news_id: DataTypes.UUID,
    Match_id: DataTypes.UUID,
    Match_news_title: DataTypes.STRING,
    Match_news_body: DataTypes.STRING,
    Match_news_photo: DataTypes.STRING,
    Season_league_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'MATCH_NEWS',
  });
  return MATCH_NEWS;
};