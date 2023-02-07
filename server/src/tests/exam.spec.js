const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Exams route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.examTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for exam model', () => {
    describe.each([
      ['/exams', 200],
      ['/exam', 404],
      ['/exams/1', 200],
      ['/exams/100', 404, 'Item does not exist'],
      ['/exams/n', 400, '"id" must be a number'],
      ['/exams/-', 400, '"id" must be a number']
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
  describe('POST method for exam model', () => {
    describe.each([
      ['/exams', { name: 'REAL exam', course_id: 1 }, 201],
      ['/exams', { nam: 'REAL MAJOR' }, 400, '"name" is required'],
      ['/exams', {}, 400, '"name" is required'],
      ['/exams', { name: 'REAL exam', credit_hours: 2 }, 400, '"course_id" is required']
      // eslint-disable-next-line max-len
    ])('POST on described routes returns expected status code and message if provided', (route, exam, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(exam);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('PUT method for exam model', () => {
    describe.each([
      ['/exams/n', { name: 'Major', date: 2, course_id: 5 }, 400, '"id" must be a number'],
      ['/exams/1', { nam: 'REAL exam', date: 2, course_id: 1 }, 400, '"name" is required'],
      ['/exams/2', { name: 'Major', date: '2023-02-14', course_id: 5 }, 200],
      ['/exams/2', { name: 'Major', date: '2023-02-14' }, 400, '"course_id" is required'],
      ['/exams/2', { date: '2023-02-14', course_id: 5 }, 400, '"name" is required'],
      ['/exams/100', { name: 'Major', date: '2023-02-14', course_id: 5 }, 404, 'Item does not exist'],
      ['/exams', { name: 'Major', date: '2003-02-14', course_id: 5 }, 404]
      // eslint-disable-next-line max-len
    ])('PUT on described routes returns expected status code and message if provided', (route, exam, expectedStatus, msg) => {
      test(`PUT request returns ${expectedStatus} status`, async () => {
        const response = await request(app).put(`${route}`).send(exam);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /exams route with invalid and valid ID', () => {
    describe.each([
      ['/exams/2', 204],
      ['/exams/100', 404],
      ['/exams/n', 400]
    ])('DELETE on /exams route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
