'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('course', {
      fields: ['major_id'],
      type: 'foreign key',
      name: 'major_course_association',
      references: {
        table: 'major',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('course', 'major_course_association');
  }
};
