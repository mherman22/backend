'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MATCH_LINE_UPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Match_line_up_id: {
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
      Season_team_member_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_TEAM_DEBATERs", key: "season_team_member_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      is_main_debater: {
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
    await queryInterface.dropTable('MATCH_LINE_UPs');
  }
};
