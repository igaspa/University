'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('lecturer', [
      {
        professor_id: 'cde7ef34-f15f-47d7-9dbb-4a19e6a66982',
        course_id: '8fa50742-1a31-467d-a08f-c443c62c6415',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        professor_id: '0f4f262c-36b6-4dd6-aa7d-2b5226ca0e23',
        course_id: '4ff5068a-1f35-4c37-bd56-d3e07c1a6e69',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        professor_id: '29a20520-a12f-46a2-8576-e08583a1124c',
        course_id: '259f8f0a-ad49-4e74-836d-6854621f0dae',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lecturer', null, {});
  }
};
