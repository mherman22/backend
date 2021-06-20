'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASON_LEAGUE_STANDINGs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Standings_id: {
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
      Season_league_team_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_LEAGUE_TEAMs", key: "season_league_team_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Matches_played: {
        type: Sequelize.STRING
      },
      Team_wins: {
        type: Sequelize.STRING
      },
      Team_draws: {
        type: Sequelize.STRING
      },
      Team_losses: {
        type: Sequelize.STRING
      },
      Team_points_forward: {
        type: Sequelize.STRING
      },
      Team_points_against: {
        type: Sequelize.STRING
      },
      Team_points_difference: {
        type: Sequelize.STRING
      },
      Team_points_obtained: {
        type: Sequelize.STRING
      },
      Team_rank: {
        type: Sequelize.STRING
      },
      Total_league_teams: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('SEASON_LEAGUE_STANDINGs');
  }
};
