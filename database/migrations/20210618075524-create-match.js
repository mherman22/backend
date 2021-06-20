'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MATCHes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Match_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Season_league_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_LEAGUEs", key: "Season_league_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Home_season_league_team_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_LEAGUE_TEAMs", key: "season_league_team_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Away_season_league_team_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_LEAGUE_TEAMs", key: "season_league_team_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Match_day: {
        type: Sequelize.DATE
      },
      Match_date: {
        type: Sequelize.DATE
      },
      Match_time: {
        type: Sequelize.TIME
      },
      Match_location: {
        type: Sequelize.STRING
      },
      Score_home_team: {
        type: Sequelize.STRING
      },
      score_away_team: {
        type: Sequelize.STRING
      },
      is_played: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('MATCHes');
  }
};