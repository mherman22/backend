'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASON_TEAM_DEBATERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      season_team_member_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      season_league_team_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_LEAGUE_TEAMs", key: "season_league_team_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Team_member_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "TEAM_MEMBERs", key: "Team_member_id" },
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
    await queryInterface.dropTable('SEASON_TEAM_DEBATERs');
  }
};