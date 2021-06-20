'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TEAMs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Team_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      School_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SCHOOLs", key: "School_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Team_name: {
        type: Sequelize.STRING
      },
      Team_description: {
        type: Sequelize.STRING
      },
      isPicked: {
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
    await queryInterface.dropTable('TEAMs');
  }
};