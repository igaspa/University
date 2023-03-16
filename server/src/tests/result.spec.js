const request = require('supertest');
const app = require('../../app');
const db = require('../database/models');
const seedData = require('./seed/seedData');

describe('Result route', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await seedData.resultTest(db.sequelize.queryInterface);
  });
  afterAll(async () => {
    await db.sequelize.drop();
    await db.sequelize.close();
  });
  describe('GET method for results model', () => {
    describe.each([
      ['/results', 200],
      ['/result', 404]
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
  describe('POST method for result model', () => {
    describe.each([
      ['/results', { grade: 5, studentId: 5, examId: 1 }, 201],
      ['/results', { grade: 5, student: 1, examId: 1 }, 400, '"studentId" is required'],
      ['/results', { grade: 1, studentId: 1, exam: 1 }, 400, '"examId" is required'],
      ['/results', {}, 400, '"grade" is required']
      // eslint-disable-next-line max-len
    ])('POST on described routes returns expected status code and message if provided', (route, result, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const loginData = {
          email: 'nmackney1c@oaic.gov.au',
          password: 'test123'
        };
        const login = await request(app)
          .post('/login')
          .send(loginData);
          // eslint-disable-next-line max-len
        const response = await request(app).post(`${route}`).set('Cookie', login.headers['set-cookie']).send(result);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('PUT method for result model', () => {
    describe.each([
      ['/results/20/7', { grade: 5, studentId: 20, examId: 7 }, 200],
      ['/results/20/5', { grade: 5, student: 1, examId: 1 }, 400, '"studentId" is required'],
      ['/results/23/7', { grade: 1, studentId: 1, exam: 1 }, 400, '"examId" is required'],
      ['/results/23/7', {}, 400, '"grade" is required']
      // eslint-disable-next-line max-len
    ])('PUT on described routes returns expected status code and message if provided', (route, result, expectedStatus, msg) => {
      test(`POST request returns ${expectedStatus} status`, async () => {
        const loginData = {
          email: 'nmackney1c@oaic.gov.au',
          password: 'test123'
        };
        const login = await request(app)
          .post('/login')
          .send(loginData);
        const response = await request(app).put(`${route}`)
          .set('Cookie', login.headers['set-cookie']).send(result);
        expect(response.statusCode).toBe(expectedStatus);
        if (msg) {
          expect(response.body.message).toMatch(msg);
        }
      });
    });
  });
  describe('DELETE request for /results route with invalid and valid ID', () => {
    describe.each([
      ['/results/20/7', 204],
      ['/results/100/100', 404],
      ['/results/n/n', 400]
    ])('DELETE on /results route returns expected status code and message', (route, expectedStatus) => {
      test(`DELETE request returns ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`${route}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
