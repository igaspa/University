const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Majors route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.majorTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for department model', () => {
    test('GET on majors/1 returns appropriate data types', async () => {
      const response = await request(app).get('/majors/1');
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          students: expect.any(Array)
        }));
      expect(response.statusCode).toBe(200);
    });
    describe.each([
      ['/majors', 200],
      ['/major', 404],
      ['/majors/100', 404, 'Item does not exist'],
      ['/majors/n', 400, '"id" must be a number'],
      ['/majors/-', 400, '"id" must be a number']
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
      ['/majors', { name: 'REAL department' }, 201],
      ['/majors', { name: 'REAL department' }, 400, 'Item has to be unique'],
      ['/majors', { nam: 'REAL MAJOR' }, 400, '"name" is required'],
      ['/majors', {}, 400, '"name" is required']
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
      ['/majors/n', { name: 'Major' }, 400, '"id" must be a number'],
      ['/majors/1', { nam: 'REAL department' }, 400, '"name" is required'],
      ['/majors/2', { name: 'Major' }, 200],
      ['/majors/100', { name: 'Major' }, 404, 'Item does not exist'],
      ['/majors', { name: 'Major' }, 404],
      ['/majors', { name: 'REAL department' }, 404]
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
  describe('DELETE request for /majors route with invalid and valid ID', () => {
    describe.each([
      ['/majors/2', 204],
      ['/majors/25', 404],
      ['/majors/n', 400]
    ])('DELETE on /majors route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
