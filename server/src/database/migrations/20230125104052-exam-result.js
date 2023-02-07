'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('result', {
      fields: ['exam_id'],
      type: 'foreign key',
      name: 'result_exam_association',
      references: {
        table: 'exam',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('result', 'result_exam_association');
  }
};
