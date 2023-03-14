'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('result', [
      {
        grade: 2,
        student_id: 20,
        exam_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 4,
        student_id: 20,
        exam_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 5,
        student_id: 23,
        exam_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 2,
        student_id: 24,
        exam_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 3,
        student_id: 25,
        exam_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 2,
        student_id: 26,
        exam_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 4,
        student_id: 27,
        exam_id: 37,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 2,
        student_id: 28,
        exam_id: 39,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        grade: 5,
        student_id: 20,
        exam_id: 47,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('result', null, {});
  }
};
