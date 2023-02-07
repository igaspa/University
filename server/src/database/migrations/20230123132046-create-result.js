'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('result', {
      grade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      exam_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
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
    await queryInterface.dropTable('result');
  }
};
