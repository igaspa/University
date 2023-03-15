const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Lecturer route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.lecturerTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for lecturer model', () => {
    describe.each([
      ['/lecturers', 200],
      ['/lecturer', 404]
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
  describe('POST method for lecturer model', () => {
    describe.each([
      ['/lecturers', { professorId: 1, courseId: 1 }, 201],
      ['/lecturers', { professor: 1, courseId: 1 }, 400, '"professorId" is required'],
      ['/lecturers', { professorId: 1, coursd: 1 }, 400, '"courseId" is required'],
      ['/lecturers', {}, 400, '"professorId" is required']
      // eslint-disable-next-line max-len
    ])('POST on described routes returns expected status code and message if provided', (route, lecturer, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const response = await request(app).post(`${route}`).send(lecturer);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /lecturers route with invalid and valid ID', () => {
    describe.each([
      ['/lecturers/1/7', 204],
      ['/lecturers/100/100', 404],
      ['/lecturers/n/n', 400]
    ])('DELETE on /lecturers route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
