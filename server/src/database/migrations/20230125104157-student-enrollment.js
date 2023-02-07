'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('enrollment', {
      fields: ['student_id'],
      type: 'foreign key',
      name: 'enrollment_student_association',
      references: {
        table: 'student',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('enrollment', 'enrollment_student_association');
  }
};
