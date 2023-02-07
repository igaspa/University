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
  describe('GET method for enrollment model', () => {
    test('GET on enrollments/11/4 returns appropriate data types', async () => {
      const response = await request(app).get('/enrollments/11/4');
      expect(response.body).toEqual(
        expect.objectContaining({
          student: {
            first_name: expect.any(String),
            last_name: expect.any(String)
          },
          course: {
            name: expect.any(String)
          },
          student_id: expect.any(Number),
          course_id: expect.any(Number)
        }));
      expect(response.statusCode).toBe(200);
    });
    describe.each([
      ['/enrollments', 200],
      ['/enrollment', 404],
      ['/enrollments/100/100', 404, 'Item does not exist'],
      ['/enrollments/n/-', 400, '"firstId" must be a number'],
      ['/enrollments/-/n', 400, '"firstId" must be a number']
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
  describe('POST method for enrollment model', () => {
    describe.each([
      ['/enrollments', { student_id: 1, course_id: 1 }, 201],
      ['/enrollments', { student: 1, course_id: 1 }, 400, '"student_id" is required'],
      ['/enrollments', { student_id: 1, coursd: 1 }, 400, '"course_id" is required'],
      ['/enrollments', {}, 400, '"student_id" is required']
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
