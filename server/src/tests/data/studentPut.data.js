const studentTestPutData = [
  ['/students/n', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"id" must be a number'],
  ['/students/1', {
    first_nam: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"firstName" is required'],
  ['/students/1', {
    firstName: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"lastName" is required'],
  ['/students/1', {
    firstName: 'First',
    lastName: 'Last',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"email" is required'],
  ['/students/1', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"address" is required'],
  ['/students/1', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    majorId: 1
  }, 400, '"phoneNumber" is required'],
  ['/students/2', {
    firstName: 'First Updated',
    lastName: 'Last',
    email: 'iga@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 200],
  ['/students/2', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"password" is required'],
  ['/students/2', {
    firstName: 'First',
    lastName: 'Last',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"email" is required'],
  ['/students/100', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 404, 'Item does not exist'],
  ['/students', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 404],
  ['/students', {
    firstName: 'First'
  }, 404]
  // eslint-disable-next-line max-len
];
module.exports = studentTestPutData;
