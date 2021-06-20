'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MATCH_DEBATER_STATs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Match_debater_stats_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Match_line_up_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "MATCH_LINE_UPs", key: "Match_line_up_id" },
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
      debater_scores: {
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
    await queryInterface.dropTable('MATCH_DEBATER_STATs');
  }
};
