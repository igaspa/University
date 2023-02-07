const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Departments route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.departmentTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for department model', () => {
    describe.each([
      ['/departments', 200],
      ['/department', 404],
      ['/departments/1', 200],
      ['/departments/100', 404, 'Item does not exist'],
      ['/departments/n', 400, '"id" must be a number'],
      ['/departments/-', 400, '"id" must be a number']
    ])('GET on described routes returns expected status code and message if provided', (route, expectedStatus, msg) => {
      test(`${route} returns ${expectedStatus} status`, async () => {
        const response = await request(app).get(`${route}`);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('POST method for department model', () => {
    describe.each([
      ['/departments', { name: 'REAL department', major_id: 1 }, 201],
      ['/departments', { name: 'REAL department', major_id: 1 }, 400, 'Item has to be unique'],
      ['/departments', { nam: 'REAL MAJOR' }, 400, '"name" is required'],
      ['/departments', {}, 400, '"name" is required'],
      ['/departments', { name: 'REAL department' }, 400, '"major_id" is required']
      // eslint-disable-next-line max-len
    ])('POST on described routes returns expected status code and message if provided', (route, department, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(department);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('PUT method for department model', () => {
    describe.each([
      ['/departments/n', { name: 'Major', major_id: 5 }, 400, '"id" must be a number'],
      ['/departments/1', { nam: 'REAL department', major_id: 1 }, 400, '"name" is required'],
      ['/departments/2', { name: 'Major', major_id: 5 }, 200],
      ['/departments/100', { name: 'Major', major_id: 5 }, 404, 'Item does not exist'],
      ['/departments', { name: 'Major', major_id: 5 }, 404],
      ['/departments', { name: 'Department' }, 404]
      // eslint-disable-next-line max-len
    ])('PUT on described routes returns expected status code and message if provided', (route, department, expectedStatus, msg) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(department);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /departments route with invalid and valid ID', () => {
    describe.each([
      ['/departments/2', 204],
      ['/departments/25', 404],
      ['/departments/n', 400]
    ])('DELETE on /departments route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
