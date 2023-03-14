'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('enrollment', [
      {
        student_id: 1,
        course_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 11,
        course_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 2,
        course_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 2,
        course_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 5,
        course_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 6,
        course_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 7,
        course_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 7,
        course_id: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 8,
        course_id: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        student_id: 10,
        course_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollment', null, {});
  }
};
