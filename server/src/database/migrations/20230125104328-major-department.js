'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('department', {
      fields: ['major_id'],
      type: 'foreign key',
      name: 'major_department_association',
      references: {
        table: 'major',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('department', 'major_department_association');
  }
};
