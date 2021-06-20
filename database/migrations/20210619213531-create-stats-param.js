'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('STATS_PARAMs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Stats_param_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Stats_param_name: {
        type: Sequelize.STRING
      },
      Param_min_score: {
        type: Sequelize.STRING
      },
      Param_max_score: {
        type: Sequelize.STRING
      },
      Is_for_team: {
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
    await queryInterface.dropTable('STATS_PARAMs');
  }
};
