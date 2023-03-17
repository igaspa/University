'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('course', [{
      id: '8fa50742-1a31-467d-a08f-c443c62c6415',
      name: 'Introduction to Game Development',
      credit_hours: 2,
      major_id: '8973efc4-e397-46bf-a623-d67fc1b0b3b1',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: '259f8f0a-ad49-4e74-836d-6854621f0dae',
      name: 'Introduction to Computer Science',
      credit_hours: 2,
      major_id: '5419ce7d-c415-480d-a980-cd169559bc85',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: '4ff5068a-1f35-4c37-bd56-d3e07c1a6e69',
      name: 'Cognitive Fitness',
      credit_hours: 1,
      major_id: '5b006c6e-f989-4ded-9172-b78c92994605',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('course', null, {});
  }
};
