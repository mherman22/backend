'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Season_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Season_name: {
        type: Sequelize.STRING
      },
      Season_start: {
        type: Sequelize.DATE
      },
      Season_end: {
        type: Sequelize.DATE
      },
      isActive: {
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
    await queryInterface.dropTable('SEASONs');
  }
};