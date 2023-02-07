'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('result', {
      fields: ['student_id'],
      type: 'foreign key',
      name: 'result_student_association',
      references: {
        table: 'student',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('result', 'result_student_association');
  }
};
