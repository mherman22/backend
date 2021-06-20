'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MATCH_TEAM_STATs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Match_team_stats_id: {
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
      Stats_param_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "STATS_PARAMs", key: "Stats_param_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Scores_home_team: {
        type: Sequelize.STRING
      },
      Scores_away_team: {
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
    await queryInterface.dropTable('MATCH_TEAM_STATs');
  }
};