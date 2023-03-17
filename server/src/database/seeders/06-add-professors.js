'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('professor', [{
      id: 'cde7ef34-f15f-47d7-9dbb-4a19e6a66982',
      first_name: 'Nicolai',
      last_name: 'Mackney',
      email: 'professor@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 46880',
      phone_number: '916-336-1467',
      department_id: '9da09fc2-be1e-481a-b9d6-e071439e06d4',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      id: '0f4f262c-36b6-4dd6-aa7d-2b5226ca0e23',
      first_name: 'Deidre',
      last_name: 'Seston',
      email: 'professor2@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Room 1162',
      phone_number: '577-854-0667',
      department_id: 'ba66a1a9-68f0-4f20-a9d0-d812f0759e73',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: '29a20520-a12f-46a2-8576-e08583a1124c',
      first_name: 'Rora',
      last_name: 'Ebrall',
      email: 'professor3@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 21027',
      phone_number: '264-782-4223',
      department_id: '8a5af042-cbb2-41e4-a728-e33fb787d50b',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }

    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('professor', null, {});
  }
};
