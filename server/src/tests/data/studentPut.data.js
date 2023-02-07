const studentTestPutData = [
  ['/students/n', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"id" must be a number'],
  ['/students/1', {
    first_nam: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"first_name" is required'],
  ['/students/1', {
    first_name: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"last_name" is required'],
  ['/students/1', {
    first_name: 'First',
    last_name: 'Last',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"email" is required'],
  ['/students/1', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"adress" is required'],
  ['/students/1', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    major_id: 1
  }, 400, '"phone_number" is required'],
  ['/students/2', {
    first_name: 'First Updated',
    last_name: 'Last',
    email: 'iga@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 200],
  ['/students/2', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"password" is required'],
  ['/students/2', {
    first_name: 'First',
    last_name: 'Last',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 400, '"email" is required'],
  ['/students/100', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 404, 'Item does not exist'],
  ['/students', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    major_id: 1
  }, 404],
  ['/students', {
    first_name: 'First'
  }, 404]
  // eslint-disable-next-line max-len
];
module.exports = studentTestPutData;
