'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('lecturer', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'course-classes-association',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('lecturer', 'course-classes-association');
  }
};
