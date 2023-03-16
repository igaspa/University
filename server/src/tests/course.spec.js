const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Courses route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.courseTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for course model', () => {
    describe.each([
      ['/courses', 200],
      ['/course', 404],
      ['/courses/1', 200],
      ['/courses/100', 404, 'Item does not exist'],
      ['/courses/n', 400, '"id" must be a number'],
      ['/courses/-', 400, '"id" must be a number']
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
  describe('POST method for course model', () => {
    describe.each([
      ['/courses', { name: 'REAL course', creditHours: 2, majorId: 1 }, 201],
      ['/courses', { name: 'REAL course', creditHours: 2, majorId: 1 }, 400, 'Item has to be unique'],
      ['/courses', { nam: 'REAL MAJOR' }, 400, '"name" is required'],
      ['/courses', {}, 400, '"name" is required'],
      ['/courses', { name: 'REAL course', creditHours: 2 }, 400, '"majorId" is required'],
      ['/courses', { name: 'REAL course', majorId: 2 }, 400, '"creditHours" is required']
      // eslint-disable-next-line max-len
    ])('POST on described routes returns expected status code and message if provided', (route, course, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(course);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('PUT method for course model', () => {
    describe.each([
      ['/courses/n', { name: 'Major', creditHours: 2, majorId: 5 }, 400, '"id" must be a number'],
      ['/courses/1', { nam: 'REAL course', creditHours: 2, majorId: 1 }, 400, '"name" is required'],
      ['/courses/2', { name: 'Major', creditHours: 2, majorId: 5 }, 200],
      ['/courses/2', { name: 'Major', majorId: 5 }, 400, '"creditHours" is required'],
      ['/courses/2', { name: 'Major', creditHours: 5 }, 400, '"majorId" is required'],
      ['/courses/100', { name: 'Major', creditHours: 2, majorId: 5 }, 404, 'Item does not exist'],
      ['/courses', { name: 'Major', creditHours: 2, majorId: 5 }, 404],
      ['/courses', { name: 'REAL course' }, 404]
      // eslint-disable-next-line max-len
    ])('PUT on described routes returns expected status code and message if provided', (route, course, expectedStatus, msg) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(course);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /courses route with invalid and valid ID', () => {
    describe.each([
      ['/courses/2', 204],
      ['/courses/50', 404],
      ['/courses/n', 400]
    ])('DELETE on /courses route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
