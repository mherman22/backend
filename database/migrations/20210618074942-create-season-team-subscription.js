'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASON_TEAM_SUBSCRIPTIONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Team_subscription_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      season_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASONs", key: "Season_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Team_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "TEAMs", key: "Team_id" },
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
    await queryInterface.dropTable('SEASON_TEAM_SUBSCRIPTIONs');
  }
};