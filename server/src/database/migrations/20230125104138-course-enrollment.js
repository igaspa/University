'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('enrollment', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'enrollment_course_association',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('enrollment', 'enrollment_course_association');
  }
};
