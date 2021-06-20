'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('USERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      User_id: {
        primaryKey: true,
        allowNull:false,
        type: Sequelize.UUID
      },
      User_role_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: "USER_ROLEs", key: "User_role_id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Username: {
        type: Sequelize.STRING,
      },
      Password: {
        type: Sequelize.STRING,
      },
      Mobile_tel: {
        type: Sequelize.DOUBLE,
        unique:true,
        allowNull:false
      },
      Email: {
        type: Sequelize.DOUBLE,
        unique:true,
        isEmail:true
      },
      User_photo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
    await queryInterface.dropTable('USERs');
  }
};