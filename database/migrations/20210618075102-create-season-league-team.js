'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASON_LEAGUE_TEAMs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      season_league_team_id: {
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
      Team_subscription_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASON_TEAM_SUBSCRIPTIONs", key: "Team_subscription_id" },
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
    await queryInterface.dropTable('SEASON_LEAGUE_TEAMs');
  }
};


// type: Sequelize.UUID,
// allowNull:true,
// references : {model:"SEASON_LEAGUEs",Key:"Season_league_id"},
// onUpdate: "CASCADE",
// onDelete: "CASCADE",