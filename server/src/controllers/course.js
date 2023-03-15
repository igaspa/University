const crudController = require('./crud');
const { course } = require('../database/models');
const { searchByName } = require('../services/filter');

exports.getAllCourses = async (req, res) => {
  const searchedName = searchByName(req.query);

  const query = {
    where: searchedName
  };
  await crudController.getAll(course, query, req, res);
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
