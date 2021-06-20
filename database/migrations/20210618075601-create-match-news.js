'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MATCH_NEWs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Match_news_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Match_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "MATCHes", key: "Match_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Match_news_title: {
        type: Sequelize.STRING
      },
      Match_news_body: {
        type: Sequelize.STRING
      },
      Match_news_photo: {
        type: Sequelize.STRING
      },
      Season_league_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_LEAGUEs", key: "Season_league_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MATCH_NEWs');
  }
};