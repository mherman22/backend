'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TEAM_MEMBERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Team_member_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      team_member_name: {
        type: Sequelize.STRING
      },
      Date_of_birth: {
        type: Sequelize.DATE
      },
      ID_Number: {
        type: Sequelize.STRING
      },
      Team_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "TEAMs", key: "Team_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Team_role_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "TEAM_ROLEs", key: "Team_role_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      photo: {
        type: Sequelize.STRING
      },
      attach_member_ID: {
        type: Sequelize.STRING
      },
      Is_approved: {
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
    await queryInterface.dropTable('TEAM_MEMBERs');
  }
};