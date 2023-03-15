'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('department', [
      {
        name: 'Exerimental Physics',
        major_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Thermodynamics',
        major_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Electronics',
        major_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Computer Science',
        major_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Anamtomy',
        major_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Organic Chemistry',
        major_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Electric Engineering',
        major_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Networks',
        major_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Theoretical Physics',
        major_id: 11,
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
