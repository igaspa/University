'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('major', [
      {
        name: 'Architecture',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Astronomy',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Biology',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Chemistry',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Computer Science',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Information Science',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Marine Biology',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Mathematics',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Mechanical Engineering',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Neuro Science',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        name: 'Physics',
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
