const professorTestPostData = [
  ['/professors', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 201],
  ['/professors', {
    firstName: 'Firste',
    lastName: 'Laste',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, 'Item has to be unique'],
  ['/professors', {
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"firstName" is required'],
  ['/professors', {}, 400, '"firstName" is required'],
  ['/professors', {
    firstName: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"lastName" is required'],
  ['/professors', {
    firstName: 'First',
    lastName: 'Last',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"email" is required'],
  ['/professors', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@med.com',
    password: 'test',
    phoneNumber: '122223345',
    departmentId: 1
  }, 400, '"address" is required'],
  ['/professors', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@med.com',
    password: 'test',
    address: 'Solin',
    departmentId: 1
  }, 400, '"phoneNumber" is required'],
  ['/professors', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@med.com',
    address: 'Solin',
    departmentId: 1
  }, 400, '"password" is required']
];
module.exports = professorTestPostData;
