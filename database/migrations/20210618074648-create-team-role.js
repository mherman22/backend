'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TEAM_ROLEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Team_role_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Team_role_name: {
        type: Sequelize.STRING
      },
      Team_role_description: {
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
    await queryInterface.dropTable('TEAM_ROLEs');
  }
};