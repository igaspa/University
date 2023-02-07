'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('professor', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'professor_department_association',
      references: {
        table: 'department',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('professor', 'professor_department_association');
  }
};
