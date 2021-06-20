'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LEAGUEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      League_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      League_name: {
        type: Sequelize.STRING
      },
      League_description: {
        type: Sequelize.STRING
      },
      League_logo: {
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
    await queryInterface.dropTable('LEAGUEs');
  }
};