'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('lecturer', {
      professor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      course_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('lecturer');
  }
};
