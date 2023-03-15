const crudController = require('./crud');
const { course } = require('../database/models');

exports.getAllCourses = async (req, res) => {
  await crudController.getAll(course, null, req, res);
};

exports.getCourse = async (req, res) => {
  await crudController.getOne(course, null, req, res);
};

exports.createCourse = async (req, res) => {
  await crudController.createItem(course, req, res);
};

exports.updateCourse = async (req, res) => {
  await crudController.updateItem(course, req, res);
};

exports.deleteCourse = async (req, res) => {
  await crudController.deleteItem(course, req, res);
};
