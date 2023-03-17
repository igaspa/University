'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('enrollment', [
      {
        student_id: 'bbbafd6a-9398-4354-993f-0bbe6516a32c',
        course_id: '259f8f0a-ad49-4e74-836d-6854621f0dae',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        student_id: 'e0a79e8f-db1b-49fa-b612-00bc913ea61c',
        course_id: '8fa50742-1a31-467d-a08f-c443c62c6415',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        student_id: 'fa06cffd-5214-4dbc-bc0b-dae11315d4cd',
        course_id: '4ff5068a-1f35-4c37-bd56-d3e07c1a6e69',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollment', null, {});
  }
};
