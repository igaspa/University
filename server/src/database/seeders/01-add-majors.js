'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('major', [
      {
        id: '5419ce7d-c415-480d-a980-cd169559bc85',
        name: 'Architecture',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        id: '8973efc4-e397-46bf-a623-d67fc1b0b3b1',
        name: 'Astronomy',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        id: '5b006c6e-f989-4ded-9172-b78c92994605',
        name: 'Biology',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        id: 'a6308d95-83e2-4dc9-ac46-b950bc4eb1ff',
        name: 'Chemistry',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('major', null, {});
  }
};
