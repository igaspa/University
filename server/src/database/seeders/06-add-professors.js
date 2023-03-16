'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('professor', [{
      first_name: 'Nicolai',
      last_name: 'Mackney',
      email: 'professor@example.com',
      password: '$2b$10$TJ1UOwsbeaW.jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 46880',
      phone_number: '916-336-1467',
      department_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Deidre',
      last_name: 'Seston',
      email: 'dseston1d@admin.ch',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Room 1162',
      phone_number: '577-854-0667',
      department_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Rora',
      last_name: 'Ebrall',
      email: 'rebrall1f@indiatimes.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 21027',
      phone_number: '264-782-4223',
      department_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Leigh',
      last_name: 'Edmonson',
      email: 'ledmonson1g@cnbc.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Suite 16',
      phone_number: '480-962-6262',
      department_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Temple',
      last_name: 'Burburough',
      email: 'tburburough1h@reference.com',
      password: 'MhcA4oEOMFk',
      address: 'PO Box 59995',
      phone_number: '318-121-5560',
      department_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Willy',
      last_name: 'Birks',
      email: 'wbirks1i@dropbox.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 8841',
      phone_number: '139-210-8136',
      department_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Shaina',
      last_name: 'Pheazey',
      email: 'spheazey1j@vkontakte.ru',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Room 588',
      phone_number: '789-971-2936',
      department_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Fredrick',
      last_name: 'Orchart',
      email: 'forchart1k@sfgate.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 46328',
      phone_number: '524-852-1164',
      department_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Jamie',
      last_name: 'Haysman',
      email: 'jhaysman1l@comsenz.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Apt 1055',
      phone_number: '852-882-0375',
      department_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Ingra',
      last_name: 'Dict',
      email: 'idict1m@columbia.edu',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Apt 215',
      phone_number: '414-216-8608',
      department_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Kit',
      last_name: 'Decort',
      email: 'kdecort1n@domainmarket.com',
      password: 'VGJihJs6gZ',
      address: 'Apt 881',
      phone_number: '588-786-6577',
      department_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Hagen',
      last_name: 'Stilliard',
      email: 'hstilliard1p@barnesandnoble.com',
      password: 'cC7dsAvNvO',
      address: '18th Floor',
      phone_number: '919-401-7135',
      department_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Marylinda',
      last_name: 'Kinzel',
      email: 'mkinzel1q@soundcloud.com',
      password: 'c0gFNRR',
      address: 'Room 150',
      phone_number: '366-309-0086',
      department_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Averill',
      last_name: 'Whapple',
      email: 'awhapple1r@webmd.com',
      password: 'cqbdr5Nyi1EC',
      address: '17th Floor',
      phone_number: '588-786-6557',
      department_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Denni',
      last_name: 'Hamill',
      email: 'dhamill1s@github.com',
      password: 'VDH5aQ',
      address: '15th Floor',
      phone_number: '342-955-9649',
      department_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Zelig',
      last_name: 'Alwin',
      email: 'zalwin1t@soundcloud.com',
      password: 'pOotse',
      address: 'Apt 603',
      phone_number: '325-623-4766',
      department_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Bobbe',
      last_name: 'Shillabeer',
      email: 'bshillabeer1u@ca.gov',
      password: 'fDC0pFZ',
      address: 'PO Box 83908',
      phone_number: '880-983-9359',
      department_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Niall',
      last_name: 'Tilbrook',
      email: 'ntilbrook1v@ebay.co.uk',
      password: 'xDqEaJ',
      address: 'PO Box 71394',
      phone_number: '718-773-7651',
      department_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Hewe',
      last_name: 'Aleshintsev',
      email: 'haleshintsev1w@bloglovin.com',
      password: 'Rci8E8Oqp4N',
      address: 'Suite 44',
      phone_number: '320-238-0738',
      department_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Sarene',
      last_name: 'Flello',
      email: 'sflello1x@craigslist.org',
      password: 'vnFA92IPA',
      address: 'Apt 436',
      phone_number: '917-645-9874',
      department_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Farrah',
      last_name: 'Szreter',
      email: 'fszreter1y@rediff.com',
      password: 'd6Lf77s1EOk',
      address: '20th Floor',
      phone_number: '904-836-7782',
      department_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Brewster',
      last_name: 'Yeliashev',
      email: 'byeliashev1z@networksolutions.com',
      password: 'jTxuD7',
      address: 'PO Box 59467',
      phone_number: '364-647-8457',
      department_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Ralina',
      last_name: 'Trunchion',
      email: 'rtrunchion20@live.com',
      password: 'hrH4bljFr',
      address: 'PO Box 47320',
      phone_number: '569-694-5160',
      department_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Frederick',
      last_name: 'Bowbrick',
      email: 'fbowbrick21@macromedia.com',
      password: 'ro5YTNykfY',
      address: 'Suite 91',
      phone_number: '447-700-0543',
      department_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Kinna',
      last_name: 'Kinchington',
      email: 'kkinchington22@msn.com',
      password: 'AAXxq20I',
      address: 'Room 1697',
      phone_number: '497-804-6599',
      department_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    }, {
      first_name: 'Cinnamon',
      last_name: 'MacLaverty',
      email: 'cmaclaverty23@admin.ch',
      password: 'RqbPL9J',
      address: 'PO Box 80952',
      phone_number: '323-150-2051',
      department_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
      deleted: false
    },
    {
      first_name: 'Rhea',
      last_name: 'Derrington',
      email: 'frderrington24@hubpages.com',
      password: 'NLe2LiYQ',
      address: '20th Floor',
      phone_number: '270-849-0025',
      department_id: 9,
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
