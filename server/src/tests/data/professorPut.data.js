const professorTestData = [
  ['/professors/n', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"id" must be a number'],
  ['/professors/1', {
    first_nam: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"first_name" is required'],
  ['/professors/1', {
    first_name: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"last_name" is required'],
  ['/professors/1', {
    first_name: 'First',
    last_name: 'Last',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"email" is required'],
  ['/professors/1', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"adress" is required'],
  ['/professors/1', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    department_id: 1
  }, 400, '"phone_number" is required'],
  ['/professors/2', {
    first_name: 'First Updated',
    last_name: 'Last',
    email: 'iga@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 200],
  ['/professors/2', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"password" is required'],
  ['/professors/2', {
    first_name: 'First',
    last_name: 'Last',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 400, '"email" is required'],
  ['/professors/100', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 404, 'Item does not exist'],
  ['/professors', {
    first_name: 'First',
    last_name: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    adress: 'Solin',
    phone_number: '122223345',
    department_id: 1
  }, 404],
  ['/professors', {
    first_name: 'First'
  }, 404]];
module.exports = professorTestData;
