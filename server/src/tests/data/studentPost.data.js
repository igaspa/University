const studentTestPostData = [
  ['/students', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 201],
  ['/students', {
    firstName: 'Firste',
    lastName: 'Laste',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, 'Item has to be unique'],
  ['/students', {
    lastName: 'Last',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"firstName" is required'],
  ['/students', {}, 400, '"firstName" is required'],
  ['/students', {
    firstName: 'First',
    email: 'ig@gmail.com',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"lastName" is required'],
  ['/students', {
    firstName: 'First',
    lastName: 'Last',
    password: 'test',
    address: 'Solin',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"email" is required'],
  ['/students', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@med.com',
    password: 'test',
    phoneNumber: '122223345',
    majorId: 1
  }, 400, '"address" is required'],
  ['/students', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@med.com',
    password: 'test',
    address: 'Solin',
    majorId: 1
  }, 400, '"phoneNumber" is required'],
  ['/students', {
    firstName: 'First',
    lastName: 'Last',
    email: 'ig@med.com',
    address: 'Solin',
    majorId: 1
  }, 400, '"password" is required']
];
module.exports = studentTestPostData;
