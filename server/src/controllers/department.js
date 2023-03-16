const crudController = require('./crud');
const { department } = require('../database/models');
const { searchByName } = require('../services/filter');

exports.getAllDepartments = async (req, res) => {
  const searchedName = searchByName(req.query);

  const query = {
    where: searchedName
  };
  await crudController.getAll(department, query, req, res);
};

exports.getDepartment = async (req, res) => {
  await crudController.getOne(department, null, req, res);
};

exports.createDepartment = async (req, res) => {
  await crudController.createItem(department, req, res);
};

exports.updateDepartment = async (req, res) => {
  await crudController.updateItem(department, req, res);
};

exports.deleteDepartment = async (req, res) => {
  await crudController.deleteItem(department, req, res);
};
