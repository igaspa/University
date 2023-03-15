const professorTestData = [
  ['/professors/n', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"id" must be a number'],
  ['/professors/1', {
    first_nam: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"firstName" is required'],
  ['/professors/1', {
    firstName: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"lastName" is required'],
  ['/professors/1', {
    firstName: 'First',
    lastName: 'Last',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"email" is required'],
  ['/professors/1', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"address" is required'],
  ['/professors/1', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    departmentId: 1
  }, 400, '"phoneNumber" is required'],
  ['/professors/2', {
    firstName: 'First Updated',
    lastName: 'Last',
    email: 'iga@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 200],
  ['/professors/2', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"password" is required'],
  ['/professors/2', {
    firstName: 'First',
    lastName: 'Last',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"email" is required'],
  ['/professors/100', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 404, 'Item does not exist'],
  ['/professors', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 404],
  ['/professors', {
    firstName: 'First'
  }, 404]];
module.exports = professorTestData;
