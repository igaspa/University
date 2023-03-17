'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exam', [{
      id: 'd871cd3b-47f7-4b2f-b72f-b605728be2da',
      name: 'Exam 1',
      course_id: '8fa50742-1a31-467d-a08f-c443c62c6415',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: '7d9ed69a-39ff-4a86-9fa3-2267e6a284ce',
      name: 'Exam 2',
      course_id: '8fa50742-1a31-467d-a08f-c443c62c6415',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: 'a8093dc0-285c-49b4-861b-b7ac5da7d127',
      name: 'Exam 1',
      course_id: '4ff5068a-1f35-4c37-bd56-d3e07c1a6e69',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: '487eecc0-90bc-428d-b5c6-254c5bd5a5ec',
      name: 'Exam 2',
      course_id: '4ff5068a-1f35-4c37-bd56-d3e07c1a6e69',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }

    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exam', null, {});
  }
};
