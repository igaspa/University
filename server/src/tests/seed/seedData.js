const majorSeed = require('../../database/seeders/20230114193856-add-majors');
const departmentSeed = require('../../database/seeders/20230114194426-add-departments');
const courseSeed = require('../../database/seeders/20230114195146-add-courses');
const studentSeed = require('../../database/seeders/20230114201419-add-students');
const examSeed = require('../../database/seeders/20230114205737-add-exams');
const professorSeed = require('../../database/seeders/20230114210255-add-professors');
const enrollmentSeed = require('../../database/seeders/20230114214056-add-enrollments');
const lecturerSeed = require('../../database/seeders/20230114215736-add-classes');
const resultSeed = require('../../database/seeders/20230114221047-add-results');

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
