'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('student', [{
      id: 'bbbafd6a-9398-4354-993f-0bbe6516a32c',
      first_name: 'Hiram',
      last_name: 'Lavensky',
      email: 'student@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: '12th Floor',
      phone_number: '916-336-1238',
      major_id: '8973efc4-e397-46bf-a623-d67fc1b0b3b1',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      id: 'e0a79e8f-db1b-49fa-b612-00bc913ea61c',
      first_name: 'Agatha',
      last_name: 'Renney',
      email: 'student2@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Room 1162',
      phone_number: '701-864-6710',
      major_id: '5419ce7d-c415-480d-a980-cd169559bc85',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      id: 'fa06cffd-5214-4dbc-bc0b-dae11315d4cd',
      first_name: 'Bendick',
      last_name: 'Robet',
      email: 'student3@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 89589',
      phone_number: '863-596-0798',
      major_id: 'a6308d95-83e2-4dc9-ac46-b950bc4eb1ff',
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student', null, {});
  }
};
