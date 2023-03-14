'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('lecturer', [
      {
        professor_id: 1,
        course_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 1,
        course_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 2,
        course_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 4,
        course_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 5,
        course_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 6,
        course_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 6,
        course_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 7,
        course_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 10,
        course_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 13,
        course_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 13,
        course_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 14,
        course_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 15,
        course_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 19,
        course_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 20,
        course_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 21,
        course_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 21,
        course_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 21,
        course_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 22,
        course_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        professor_id: 27,
        course_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lecturer', null, {});
  }
};
