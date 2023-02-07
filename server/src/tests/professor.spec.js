/* eslint-disable max-len */
const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const professorTestPostData = require('./data/professorPost.data');
const professorTestData = require('./data/professorPut.data');
const seedData = require('./seed/seedData');

describe('Professor route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.userTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for professor model', () => {
    test('GET on professors/1 returns appropriate data types', async () => {
      const response = await request(app).get('/professors/1');
      expect(response.body).toEqual(
        expect.objectContaining({
          department: expect.objectContaining(
            {
              name: expect.any(String)
            }
          ),
          role: expect.any(String),
          id: expect.any(Number),
          first_name: expect.any(String),
          last_name: expect.any(String),
          email: expect.any(String),
          password: expect.any(String),
          adress: expect.any(String),
          phone_number: expect.any(String),
          department_id: expect.any(Number)
        }));
      expect(response.statusCode).toBe(200);
    });
    describe.each([
      ['/professors', 200],
      ['/professor', 404],
      ['/professors/100', 404, 'Item does not exist'],
      ['/professors/n', 400, '"id" must be a number'],
      ['/professors/-', 400, '"id" must be a number']
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
  describe('POST method for professor model', () => {
    describe.each(professorTestPostData)('POST on described routes returns expected status code and message if provided', (route, professor, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(professor);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('PUT method for professor model', () => {
    describe.each(professorTestData)('PUT on described routes returns expected status code and message if provided', (route, professor, expectedStatus, msg) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(professor);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /professor route with invalid and valid ID', () => {
    describe.each([
      ['/professors/1', 204],
      ['/professors/50', 404],
      ['/professors/n', 400]
    ])('DELETE on /departments route returns expected status code and message', (route, expectedStatus, msg) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
});
