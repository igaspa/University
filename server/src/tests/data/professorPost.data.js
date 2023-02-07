const professorTestPostData = [
  ['/professors', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 201],
  ['/professors', {
    first_name: 'Firste',
    last_name: 'Laste',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, 'Item has to be unique'],
  ['/professors', {
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"first_name" is required'],
  ['/professors', {}, 400, '"first_name" is required'],
  ['/professors', {
    first_name: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"last_name" is required'],
  ['/professors', {
    first_name: 'First',
    last_name: 'Last',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"email" is required'],
  ['/professors', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@med.com',
    password: 'test',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"adress" is required'],
  ['/professors', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@med.com',
    password: 'test',
    adress: 'Solin',
    department_id: 1
  }, 400, '"phone_number" is required'],
  ['/professors', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@med.com',
    adress: 'Solin',
    department_id: 1
  }, 400, '"password" is required']
];
module.exports = professorTestPostData;
