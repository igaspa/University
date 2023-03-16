const majorSeed = require('../../database/seeders/01-add-majors');
const departmentSeed = require('../../database/seeders/02-add-departments');
const courseSeed = require('../../database/seeders/03-add-courses');
const studentSeed = require('../../database/seeders/04-add-students');
const examSeed = require('../../database/seeders/05-add-exams');
const professorSeed = require('../../database/seeders/06-add-professors');
const enrollmentSeed = require('../../database/seeders/07-add-enrollments');
const lecturerSeed = require('../../database/seeders/08-add-classes');
const resultSeed = require('../../database/seeders/09-add-results');

module.exports = {
  majorTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
  },
  departmentTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await departmentSeed.up(queryInterface);
  },
  courseTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
  },
  loginTest: async function (queryInterface) {
    await departmentSeed.up(queryInterface);
    await majorSeed.up(queryInterface);
    await roleSeed.up(queryInterface);
    await studentSeed.up(queryInterface);
    await professorSeed.up(queryInterface);
  },
  userTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await departmentSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
    await studentSeed.up(queryInterface);
    await examSeed.up(queryInterface);
    await professorSeed.up(queryInterface);
    await enrollmentSeed.up(queryInterface);
    await lecturerSeed.up(queryInterface);
    await resultSeed.up(queryInterface);
  },
  examTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
    await studentSeed.up(queryInterface);
    await examSeed.up(queryInterface);
  },
  enrollmentTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
    await studentSeed.up(queryInterface);
    await enrollmentSeed.up(queryInterface);
  },
  lecturerTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await departmentSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
    await professorSeed.up(queryInterface);
    await lecturerSeed.up(queryInterface);
  },
  resultTest: async function (queryInterface) {
    await majorSeed.up(queryInterface);
    await departmentSeed.up(queryInterface);
    await courseSeed.up(queryInterface);
    await studentSeed.up(queryInterface);
    await professorSeed.up(queryInterface);
    await examSeed.up(queryInterface);
    await resultSeed.up(queryInterface);
  }
};
