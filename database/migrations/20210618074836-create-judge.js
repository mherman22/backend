'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('JUDGEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Judge_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      Judge_name: {
        type: Sequelize.STRING
      },
      Judge_resume: {
        type: Sequelize.STRING
      },
      Judge_contact: {
        type: Sequelize.DOUBLE
      },
      Judge_photo: {
        type: Sequelize.STRING
      },
      is_active: {
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
    await queryInterface.dropTable('JUDGEs');
  }
};