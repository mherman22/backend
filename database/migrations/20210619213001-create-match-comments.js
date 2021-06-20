"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MATCH_COMMENTs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      Match_comments_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      Match_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "MATCHes", key: "Match_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Comment_message: {
        type: Sequelize.STRING,
      },
      User_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "USERs", key: "User_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MATCH_COMMENTs");
  },
};
