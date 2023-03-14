'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('major', [
      {
        name: 'Architecture',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Astronomy',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Biology',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Chemistry',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Computer Science',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Information Science',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Marine Biology',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mathematics',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mechanical Engineering',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Neuro Science',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Physics',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('major', null, {});
  }
};
