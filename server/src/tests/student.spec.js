/* eslint-disable max-len */
const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const studentTestPostData = require('./data/studentPost.data');
const studentTestPutData = require('./data/studentPut.data');
const seedData = require('./seed/seedData');

describe('Student route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.userTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for student model', () => {
    test('GET on students/1 returns appropriate data types', async () => {
      const response = await request(app).get('/students/1');
      expect(response.body).toEqual(
        expect.objectContaining({
          major: expect.objectContaining(
            {
              name: expect.any(String)
            }
          ),
          role: expect.any(String),
          id: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
          email: expect.any(String),
          address: expect.any(String),
          phoneNumber: expect.any(String),
          majorId: expect.any(Number)
        }));
      expect(response.statusCode).toBe(200);
    });
    describe.each([
      ['/students', 200],
      ['/student', 404],
      ['/students/1', 200],
      ['/students/100', 404, 'Item does not exist'],
      ['/students/n', 400, '"id" must be a number'],
      ['/students/-', 400, '"id" must be a number']
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
  describe('POST method for student model', () => {
    describe.each(studentTestPostData)('POST on described routes returns expected status code and message if provided', (route, student, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(student);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('PUT method for student model', () => {
    describe.each(studentTestPutData)('PUT on described routes returns expected status code and message if provided', (route, student, expectedStatus, msg) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(student);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /student route with invalid and valid ID', () => {
    describe.each([
      ['/students/1', 204],
      ['/students/50', 404],
      ['/students/n', 400, '"id" must be a number']
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
