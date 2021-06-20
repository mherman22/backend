'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SEASON_LEAGUEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Season_league_id: {
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
      League_id : {
        type: Sequelize.UUID,
        allowNull:true,
        references : {model:"LEAGUEs",key:"League_id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      League_start: {
        type: Sequelize.DATE
      },
      League_end: {
        type: Sequelize.DATE
      },
      school_type_id: {
        type: Sequelize.UUID,
        allowNull:true,
        references : {model:"SCHOOL_TYPEs",key:"School_type_id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Is_closed: {
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
    await queryInterface.dropTable('SEASON_LEAGUEs');
  }
};