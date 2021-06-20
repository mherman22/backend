"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SCHOOLs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      School_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      school_type_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "SCHOOL_TYPEs", key: "School_type_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      school_name: {
        type: Sequelize.STRING,
        unique:true
      },
      school_logo: {
        type: Sequelize.STRING,
      },
      Physical_address: {
        type: Sequelize.STRING,
      },
      Mobile_telephone: {
        type: Sequelize.DOUBLE,
      },
      Other_telephone: {
        type: Sequelize.DOUBLE,
      },
      School_email: {
        type: Sequelize.STRING,
        unique:true,
        isEmail:true
      },
      School_website: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("SCHOOLs");
  },
};
