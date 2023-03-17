'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('result', [
      {
        grade: 2,
        student_id: 'bbbafd6a-9398-4354-993f-0bbe6516a32c',
        exam_id: 'd871cd3b-47f7-4b2f-b72f-b605728be2da',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        grade: 4,
        student_id: 'fa06cffd-5214-4dbc-bc0b-dae11315d4cd',
        exam_id: 'd871cd3b-47f7-4b2f-b72f-b605728be2da',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        grade: 5,
        student_id: 'e0a79e8f-db1b-49fa-b612-00bc913ea61c',
        exam_id: 'a8093dc0-285c-49b4-861b-b7ac5da7d127',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      },
      {
        grade: 2,
        student_id: 'e0a79e8f-db1b-49fa-b612-00bc913ea61c',
        exam_id: '487eecc0-90bc-428d-b5c6-254c5bd5a5ec',
        created_at: new Date(),
        updated_at: new Date(),
        deleted: false
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('result', null, {});
  }
};
