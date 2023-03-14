'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('student', [{
      first_name: 'Hiram',
      last_name: 'Lavensky',
      email: 'hlevensky0@wix.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: '12th Floor',
      phone_number: '916-336-1238',
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      first_name: 'Agatha',
      last_name: 'Renney',
      email: 'arenney1@themeforest.net',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Room 1162',
      phone_number: '701-864-6710',
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Bendick',
      last_name: 'Robet',
      email: 'brobet2@lulu.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 89589',
      phone_number: '863-596-0798',
      major_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Frederique',
      last_name: 'Drillingcourt',
      email: 'fdrillingcourt3@java.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Room 684',
      phone_number: '501-828-2525',
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Braden',
      last_name: 'Wenzel',
      email: 'bwenzel4@yandex.ru',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: '4th Floor',
      phone_number: '399-581-8470',
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Gracie',
      last_name: 'Steer',
      email: 'gsteer5@slideshare.net',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: '11th Floor',
      phone_number: '381-673-6270',
      major_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Benedetto',
      last_name: 'Jerrams',
      email: 'bjerrams6@sina.com.cn',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: '20th Floor',
      phone_number: '628-414-7323',
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Hanson',
      last_name: 'Clethro',
      email: 'hclethro7@trellian.com',
      password: 'hcfnjW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXqWQ',
      address: '9th Floor',
      phone_number: '439-660-5934',
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Samson',
      last_name: 'McSwan',
      email: 'smcswan8@blogtalkradio.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Apt 201',
      phone_number: '309-120-1043',
      major_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Jorge',
      last_name: 'Mico',
      email: 'jmico9@china.com.cn',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 14747',
      phone_number: '683-312-7539',
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Wallache',
      last_name: 'Creggan',
      email: 'wcreggana@oakley.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 84361',
      phone_number: '309-120-1045',
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Christoforo',
      last_name: 'de Grey',
      email: 'cdegreyb@ehow.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 90826',
      phone_number: '712-962-7017',
      major_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Fredericka',
      last_name: 'Abell',
      email: 'fabelld@java.com',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'Apt 1314',
      phone_number: '802-314-3150',
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Ignaz',
      last_name: 'Pien',
      email: 'ipiene@google.co.jp',
      password: 'jW3yXu9Gne9tpeCUPGwG50Hx5K6MYT17afgqLHJXq',
      address: 'PO Box 3315',
      phone_number: '326-640-2533',
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Hilly',
      last_name: 'Camelli',
      email: 'hcamellif@yahoo.co.jp',
      password: 'PkaoyDoBE',
      address: 'Room 353',
      phone_number: '333-764-4577',
      major_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Jacklyn',
      last_name: 'Bissell',
      email: 'jbissellg@comsenz.com',
      password: 'kXpJbQLODgog',
      address: 'Room 354',
      phone_number: '152-700-9951',
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Jacklyn',
      last_name: 'Bissell',
      email: 'jbisselwwlg@comsenz.com',
      password: 'PkaoyDossBE',
      address: 'Room 3123',
      phone_number: '152-700-9951',
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Norry',
      last_name: 'Rosenbloom',
      email: 'nrosenbloomh@twitpic.com',
      password: 'lLMti118O',
      address: 'PO Box 70107',
      phone_number: '818-434-0589',
      major_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Cherye',
      last_name: 'Glave',
      email: 'cglavei@mashable.com',
      password: 'gB5VPpy6DEp3',
      address: 'Apt 1098',
      phone_number: '184-877-8013',
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Irwinn',
      last_name: 'Choppen',
      email: 'ichoppenj@hibu.com',
      password: 'JWRfErHs',
      address: '7th Floor',
      phone_number: '182-661-6675',
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Janot',
      last_name: 'Marns',
      email: 'jmarnsk@google.com.br',
      password: 'B2fTT0pOPKWh',
      address: '17th Floor',
      phone_number: '215-953-0672',
      major_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Kass',
      last_name: 'Fidgeon',
      email: 'kfidgeonl@mtv.com',
      password: 'dzJzYPF9',
      address: 'Apt 1939',
      phone_number: '952-435-5830',
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Shena',
      last_name: 'Chartman',
      email: 'schartmanm@booking.com',
      password: 'biHwD6',
      address: 'Room 1763',
      phone_number: '209-340-3623',
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Minda',
      last_name: 'Gooddie',
      email: 'mgooddien@bizjournals.com',
      password: 'CafBuyzx29J',
      address: 'Apt 1618',
      phone_number: '309-693-6090',
      major_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Veronike',
      last_name: 'Gautrey',
      email: 'vgautreyo@altervista.org',
      password: 'CfQM1RPK',
      address: 'Room 327',
      phone_number: '711-485-3446',
      major_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Roxie',
      last_name: 'Menezes',
      email: 'rmenezesp@sitemeter.com',
      password: 'z0ujdQ9',
      address: '3rd Floor',
      phone_number: '943-961-5800',
      major_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Hillery',
      last_name: 'Kingsnoad',
      email: 'hkingsnoadr@wikipedia.org',
      password: 'cf5wExw8',
      address: 'PO Box 88179',
      phone_number: '647-606-7200',
      major_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Codie',
      last_name: 'Betonia',
      email: 'cbetonias@biblegateway.com',
      password: '51XtvK554Z',
      address: '4th Floor',
      phone_number: '713-716-1864',
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Gasper',
      last_name: 'Belasco',
      email: 'gbelascot@shutterfly.com',
      password: '3tRrwnV',
      address: 'Apt 1019',
      phone_number: '770-797-3473',
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Athena',
      last_name: 'Enrico',
      email: 'adenricou@ask.com@wikipedia.org',
      password: 'zrhE1a',
      address: 'Room 375',
      phone_number: '349-948-6767',
      major_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Katrinka',
      last_name: 'Sparwell',
      email: 'ksparwellv@slate.com',
      password: '5yeuyDah',
      address: 'Suite 48',
      phone_number: '576-869-6380',
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Freeman',
      last_name: 'Carp',
      email: 'fcarpw@sogou.com',
      password: 'ffpHbrndW',
      address: 'Suite 56',
      phone_number: '779-724-3909',
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Anastassia',
      last_name: 'Jeremaes',
      email: 'ajeremaesx@wikia.com',
      password: '4k3DiCVQHm',
      address: 'Apt 1489',
      phone_number: '449-232-1310',
      major_id: 11,
      created_at: new Date(),
      updated_at: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student', null, {});
  }
};
