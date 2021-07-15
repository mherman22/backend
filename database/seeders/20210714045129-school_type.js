'use strict';

const { UUID } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    "school_type",[
      {
        School_type_id:new UUID(),
        School_type_name: "university",
        School_type_description:"tertiary institution",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        School_type_id:new UUID(),
        School_type_name: "secondary school",
        School_type_description:"both O and A level",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        School_type_id:new UUID(),
        School_type_name: "primary school",
        School_type_description:"from primary five  to primary seven",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
