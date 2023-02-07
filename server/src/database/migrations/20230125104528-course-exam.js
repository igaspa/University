'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('exam', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'exams_course_association',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('exam', 'exams_course_association');
  }
};
