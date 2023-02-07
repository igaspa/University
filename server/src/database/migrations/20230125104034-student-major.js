'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('student', {
      fields: ['major_id'],
      type: 'foreign key',
      name: 'student_major_association',
      references: {
        table: 'major',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('student', 'student_major_association');
  }
};
