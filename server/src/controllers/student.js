const { student, major } = require('../database/models');
const bcrypt = require('bcrypt');
const { INCLUDE_NAME } = require('../utils/helper');
const crudController = require('./crud');
const { searchByUserName } = require('../services/filter');

exports.getAllStudents = async (req, res) => {
  const searchedName = searchByUserName(req.query);
  const query = {
    include: {
      model: major,
      attributes: INCLUDE_NAME
    },
    where: searchedName
  };
  await crudController.getAll(student, query, req, res);
};

module.exports.getStudent = async (req, res) => {
  const query = {
    include: {
      model: major,
      attributes: INCLUDE_NAME
    }
  };
  await crudController.getOne(student, query, req, res);
};

module.exports.createStudent = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await crudController.createItem(student, req, res);
};

exports.updateStudent = async (req, res) => {
  await crudController.updateItem(student, req, res);
};

exports.deleteStudent = async (req, res) => {
  await crudController.deleteItem(student, req, res);
};
