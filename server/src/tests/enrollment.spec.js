const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Enrollment route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.enrollmentTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('POST method for enrollment model', () => {
    describe.each([
      ['/enrollments', { studentId: 1, courseId: 1 }, 201],
      ['/enrollments', { student: 1, courseId: 1 }, 400, '"studentId" is required'],
      ['/enrollments', { studentId: 1, coursId: 1 }, 400, '"courseId" is required'],
      ['/enrollments', {}, 400, '"studentId" is required']
      // eslint-disable-next-line max-len
    ])('POST on described routes returns expected status code and message if provided', (route, enrollment, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(enrollment);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /enrollments route with invalid and valid ID', () => {
    describe.each([
      ['/enrollments/1/3', 204],
      ['/enrollments/100/100', 404],
      ['/enrollments/n/n', 400]
    ])('DELETE on /enrollments route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
