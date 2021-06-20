'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASON_JUDGEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Season_judge_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      season_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SEASONs", key: "Season_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Judge_id: {
        type: Sequelize.UUID,
        allowNull:true,
        references : {model : "JUDGEs",key:"Judge_id"},
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
    await queryInterface.dropTable('SEASON_JUDGEs');
  }
};