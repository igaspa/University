'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('department', [
      {
        id: '8a5af042-cbb2-41e4-a728-e33fb787d50b',
        name: 'Exerimental Physics',
        major_id: '5419ce7d-c415-480d-a980-cd169559bc85',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        id: 'ba66a1a9-68f0-4f20-a9d0-d812f0759e73',
        name: 'Thermodynamics',
        major_id: '8973efc4-e397-46bf-a623-d67fc1b0b3b1',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        id: '9da09fc2-be1e-481a-b9d6-e071439e06d4',
        name: 'Electronics',
        major_id: '8973efc4-e397-46bf-a623-d67fc1b0b3b1',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('department', null, {});
  }
};
