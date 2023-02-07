'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('lecturer', {
      fields: ['professor_id'],
      type: 'foreign key',
      name: 'professor-classes-association',
      references: {
        table: 'professor',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('lecturer', 'professor-classes-association');
  }
};
