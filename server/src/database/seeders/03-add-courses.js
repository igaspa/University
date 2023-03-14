'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('course', [{
      name: 'Introduction to Game Development',
      credit_hours: 2,
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Introduction to Computer Science',
      credit_hours: 2,
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cognitive Fitness',
      credit_hours: 1,
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cell Biology: Mitochondria',
      credit_hours: 3,
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Fundamentals of Neuroscience',
      credit_hours: 2,
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Positive Psychology',
      credit_hours: 1,
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Introduction to Probability',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mathematical Statistics',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Introduction to Complex Analysis',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'College Algebra',
      credit_hours: 2,
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Introductory Physics',
      credit_hours: 1,
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Electromagnetism',
      credit_hours: 2,
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Particle Physics',
      credit_hours: 1,
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Analytical Chemistry',
      credit_hours: 2,
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Environmental Chemistry',
      credit_hours: 1,
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Organic Chemistry',
      credit_hours: 3,
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Architectural technology',
      credit_hours: 2,
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Architectural engineering',
      credit_hours: 4,
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Planetary Astronomy',
      credit_hours: 3,
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Extragalactic Astronomy',
      credit_hours: 1,
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Network Security and Cyber Law',
      credit_hours: 2,
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Cryptography',
      credit_hours: 3,
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Applied Marine Science',
      credit_hours: 2,
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Environmental Science',
      credit_hours: 1,
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Mechanics',
      credit_hours: 4,
      major_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Materials Science',
      credit_hours: 2,
      major_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('course', null, {});
  }
};
