'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('course', [{
      name: 'Introduction to Game Development',
      credit_hours: 2,
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Introduction to Computer Science',
      credit_hours: 2,
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Cognitive Fitness',
      credit_hours: 1,
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Cell Biology: Mitochondria',
      credit_hours: 3,
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Fundamentals of Neuroscience',
      credit_hours: 2,
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Positive Psychology',
      credit_hours: 1,
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Introduction to Probability',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Mathematical Statistics',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Introduction to Complex Analysis',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'College Algebra',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Introductory Physics',
      credit_hours: 1,
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Electromagnetism',
      credit_hours: 2,
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Particle Physics',
      credit_hours: 1,
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Analytical Chemistry',
      credit_hours: 2,
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Environmental Chemistry',
      credit_hours: 1,
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Organic Chemistry',
      credit_hours: 3,
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Architectural technology',
      credit_hours: 2,
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Architectural engineering',
      credit_hours: 4,
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Planetary Astronomy',
      credit_hours: 3,
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Extragalactic Astronomy',
      credit_hours: 1,
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Network Security and Cyber Law',
      credit_hours: 2,
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Cryptography',
      credit_hours: 3,
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Applied Marine Science',
      credit_hours: 2,
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Environmental Science',
      credit_hours: 1,
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Mechanics',
      credit_hours: 4,
      major_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      name: 'Materials Science',
      credit_hours: 2,
      major_id: 9,
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
